export interface ContactMessageInput {
  readonly name: string;
  readonly email: string;
  readonly subject: string;
  readonly message: string;
}

export type ContactField = keyof ContactMessageInput;

export interface ContactValidationIssue {
  readonly field: ContactField;
  readonly message: string;
}

export type ContactSubmissionResult =
  | { readonly ok: true; readonly message: string }
  | {
      readonly ok: false;
      readonly issues: readonly ContactValidationIssue[];
      readonly message: string;
    };

export function validateContactMessage(
  input: ContactMessageInput,
): readonly ContactValidationIssue[] {
  const issues: ContactValidationIssue[] = [];
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!input.name.trim()) {
    issues.push({ field: "name", message: "Informe seu nome." });
  }
  if (!emailPattern.test(input.email.trim())) {
    issues.push({ field: "email", message: "Informe um e-mail válido." });
  }
  if (!input.subject.trim()) {
    issues.push({ field: "subject", message: "Informe o assunto." });
  }
  if (input.message.trim().length < 10) {
    issues.push({
      field: "message",
      message: "Conte um pouco mais: a mensagem precisa ter ao menos 10 caracteres.",
    });
  }

  return issues;
}

/**
 * Isolated submission boundary for a future FastAPI contact endpoint.
 * The first version gives an honest local confirmation rather than pretending
 * to send an email that has not been configured yet.
 */
export async function sendContactMessage(
  input: ContactMessageInput,
): Promise<ContactSubmissionResult> {
  const normalizedInput: ContactMessageInput = {
    name: input.name.trim(),
    email: input.email.trim(),
    subject: input.subject.trim(),
    message: input.message.trim(),
  };
  const issues = validateContactMessage(normalizedInput);

  if (issues.length > 0) {
    return {
      ok: false,
      issues,
      message: "Revise os campos destacados e tente novamente.",
    };
  }

  return {
    ok: true,
    message:
      "Mensagem validada. O envio real será conectado quando o canal de contato estiver configurado.",
  };
}
