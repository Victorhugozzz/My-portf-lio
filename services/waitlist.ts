import {
  isProductInterest,
  type ProductInterest,
} from "@/data/products";
import { z } from "zod";

const productInterestSchema = z
  .string()
  .refine(isProductInterest, {
    message: "Selecione um produto de interesse.",
  })
  .transform((value): ProductInterest => value);

/**
 * Schema shared by the form boundary and the persistence service. Keeping it
 * here means the visual layer can validate with Zod without owning storage.
 */
export const waitlistSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome."),
  whatsapp: z
    .string()
    .trim()
    .refine(
      (value) => value.replace(/\D/g, "").length >= 8,
      "Informe um WhatsApp válido com DDD.",
    ),
  instagram: z.string().trim().max(80, "Informe um Instagram válido."),
  profession: z.string().trim().min(1, "Informe sua profissão."),
  mainDifficulty: z
    .string()
    .trim()
    .min(1, "Conte qual é a sua principal dificuldade."),
  productInterest: productInterestSchema,
});

/** Values after Zod validates and normalizes whitespace. */
export type WaitlistInput = z.infer<typeof waitlistSchema>;
/** Values accepted from form state before Zod validates them. */
export type WaitlistFormInput = z.input<typeof waitlistSchema>;

const waitlistEntrySchema = waitlistSchema.extend({
  id: z.string().min(1),
  createdAt: z.string().datetime(),
});

export type WaitlistEntry = z.infer<typeof waitlistEntrySchema>;

export type WaitlistField = keyof WaitlistInput;

export interface WaitlistValidationIssue {
  readonly field: WaitlistField;
  readonly message: string;
}

export type WaitlistSubmissionResult =
  | {
      readonly ok: true;
      readonly entry: WaitlistEntry;
      readonly persistence: "local";
      readonly message: string;
    }
  | {
      readonly ok: false;
      readonly reason: "validation" | "storage-unavailable";
      readonly issues: readonly WaitlistValidationIssue[];
      readonly message: string;
    };

export const WAITLIST_STORAGE_KEY = "victor-dev:autonomo-pro-waitlist:v1";

/**
 * Temporary client-side persistence only.
 *
 * When the FastAPI backend is ready, replace the local-storage branch in
 * `submitWaitlist` with a POST to that API while retaining these input and
 * result contracts. Visual components should continue to call this service,
 * never the API directly.
 */
export const WAITLIST_API_MIGRATION_NOTE =
  "TODO: trocar o armazenamento local por uma integração com a futura API FastAPI.";

function getBrowserStorage(): Storage | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

function isStoredEntry(value: unknown): value is WaitlistEntry {
  return waitlistEntrySchema.safeParse(value).success;
}

function readLocalEntries(storage: Storage): WaitlistEntry[] {
  try {
    const storedValue = storage.getItem(WAITLIST_STORAGE_KEY);

    if (!storedValue) {
      return [];
    }

    const parsedValue: unknown = JSON.parse(storedValue);

    if (!Array.isArray(parsedValue)) {
      return [];
    }

    return parsedValue.filter(isStoredEntry);
  } catch {
    return [];
  }
}

const waitlistFields = [
  "name",
  "whatsapp",
  "instagram",
  "profession",
  "mainDifficulty",
  "productInterest",
] as const;

function isWaitlistField(value: unknown): value is WaitlistField {
  return (
    typeof value === "string" &&
    waitlistFields.some((field) => field === value)
  );
}

function getValidationIssues(error: z.ZodError): readonly WaitlistValidationIssue[] {
  const issues: WaitlistValidationIssue[] = [];

  for (const issue of error.issues) {
    const field = issue.path[0];

    if (isWaitlistField(field)) {
      issues.push({ field, message: issue.message });
    }
  }

  return issues;
}

/**
 * Defensive service validation. The form can use Zod for its field-level
 * validation and then pass the validated values here; this guard also protects
 * the temporary storage boundary from invalid programmatic calls.
 */
export function validateWaitlistInput(
  input: unknown,
): readonly WaitlistValidationIssue[] {
  const parsedInput = waitlistSchema.safeParse(input);
  return parsedInput.success ? [] : getValidationIssues(parsedInput.error);
}

function createEntryId(): string {
  if (
    typeof crypto !== "undefined" &&
    typeof crypto.randomUUID === "function"
  ) {
    return crypto.randomUUID();
  }

  return `waitlist-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

/**
 * Client-safe service used by the waitlist form. It never accesses
 * `localStorage` during module evaluation, so importing it from the app does
 * not break server rendering.
 */
export async function submitWaitlist(
  input: WaitlistFormInput,
): Promise<WaitlistSubmissionResult> {
  const parsedInput = waitlistSchema.safeParse(input);

  if (!parsedInput.success) {
    return {
      ok: false,
      reason: "validation",
      issues: getValidationIssues(parsedInput.error),
      message: "Revise os campos destacados e tente novamente.",
    };
  }

  const storage = getBrowserStorage();

  if (!storage) {
    return {
      ok: false,
      reason: "storage-unavailable",
      issues: [],
      message:
        "Não foi possível salvar seu interesse neste dispositivo. Tente novamente em outro navegador.",
    };
  }

  const entry: WaitlistEntry = {
    ...parsedInput.data,
    id: createEntryId(),
    createdAt: new Date().toISOString(),
  };

  try {
    const entries = readLocalEntries(storage);
    storage.setItem(WAITLIST_STORAGE_KEY, JSON.stringify([...entries, entry]));

    return {
      ok: true,
      entry,
      persistence: "local",
      message:
        "Interesse registrado neste dispositivo. Em breve você receberá novidades sobre o Autônomo Pro.",
    };
  } catch {
    return {
      ok: false,
      reason: "storage-unavailable",
      issues: [],
      message:
        "Não foi possível salvar seu interesse neste dispositivo. Tente novamente em outro navegador.",
    };
  }
}

/** Returns locally stored temporary entries without touching a future API. */
export function getLocalWaitlistEntries(): readonly WaitlistEntry[] {
  const storage = getBrowserStorage();
  return storage ? readLocalEntries(storage) : [];
}
