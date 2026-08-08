"use client";

import { useState, type FormEvent } from "react";

import { productInterestOptions } from "@/data/products";
import {
  submitWaitlist,
  type WaitlistField,
  type WaitlistFormInput,
} from "@/services/waitlist";

type FieldErrors = Partial<Record<WaitlistField, string>>;

const initialValues: WaitlistFormInput = {
  name: "",
  whatsapp: "",
  instagram: "",
  profession: "",
  mainDifficulty: "",
  productInterest: "autonomo-pro",
};

export function WaitlistForm() {
  const [values, setValues] = useState<WaitlistFormInput>(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateValue(field: WaitlistField, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setFeedback("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const result = await submitWaitlist(values);

    if (!result.ok) {
      const nextErrors: FieldErrors = {};
      result.issues.forEach((issue) => {
        nextErrors[issue.field] = issue.message;
      });
      setErrors(nextErrors);
      setFeedback(result.message);
      setIsSubmitting(false);
      return;
    }

    setErrors({});
    setFeedback(result.message);
    setValues(initialValues);
    setIsSubmitting(false);
  }

  return (
    <form className="waitlist-form" noValidate onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span>Nome</span>
          <input
            aria-describedby={errors.name ? "waitlist-name-error" : undefined}
            aria-invalid={Boolean(errors.name)}
            autoComplete="name"
            name="name"
            onChange={(event) => updateValue("name", event.target.value)}
            placeholder="Seu nome"
            value={values.name}
          />
          {errors.name ? <small id="waitlist-name-error">{errors.name}</small> : null}
        </label>
        <label>
          <span>WhatsApp</span>
          <input
            aria-describedby={errors.whatsapp ? "waitlist-whatsapp-error" : undefined}
            aria-invalid={Boolean(errors.whatsapp)}
            autoComplete="tel"
            inputMode="tel"
            name="whatsapp"
            onChange={(event) => updateValue("whatsapp", event.target.value)}
            placeholder="(00) 00000-0000"
            value={values.whatsapp}
          />
          {errors.whatsapp ? <small id="waitlist-whatsapp-error">{errors.whatsapp}</small> : null}
        </label>
      </div>
      <div className="form-grid">
        <label>
          <span>Instagram <em>(opcional)</em></span>
          <input
            aria-describedby={errors.instagram ? "waitlist-instagram-error" : undefined}
            aria-invalid={Boolean(errors.instagram)}
            autoComplete="off"
            name="instagram"
            onChange={(event) => updateValue("instagram", event.target.value)}
            placeholder="@seuinstagram"
            value={values.instagram}
          />
          {errors.instagram ? <small id="waitlist-instagram-error">{errors.instagram}</small> : null}
        </label>
        <label>
          <span>Profissão</span>
          <input
            aria-describedby={errors.profession ? "waitlist-profession-error" : undefined}
            aria-invalid={Boolean(errors.profession)}
            name="profession"
            onChange={(event) => updateValue("profession", event.target.value)}
            placeholder="Ex.: fotógrafo, eletricista..."
            value={values.profession}
          />
          {errors.profession ? <small id="waitlist-profession-error">{errors.profession}</small> : null}
        </label>
      </div>
      <label>
        <span>Qual produto mais te interessa?</span>
        <select
          aria-describedby={errors.productInterest ? "waitlist-product-error" : undefined}
          aria-invalid={Boolean(errors.productInterest)}
          name="productInterest"
          onChange={(event) => updateValue("productInterest", event.target.value)}
          value={values.productInterest}
        >
          {productInterestOptions.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
        {errors.productInterest ? <small id="waitlist-product-error">{errors.productInterest}</small> : null}
      </label>
      <label>
        <span>Qual é sua principal dificuldade hoje?</span>
        <textarea
          aria-describedby={errors.mainDifficulty ? "waitlist-difficulty-error" : undefined}
          aria-invalid={Boolean(errors.mainDifficulty)}
          name="mainDifficulty"
          onChange={(event) => updateValue("mainDifficulty", event.target.value)}
          placeholder="Ex.: perco o controle das cobranças e dos horários dos clientes."
          rows={4}
          value={values.mainDifficulty}
        />
        {errors.mainDifficulty ? <small id="waitlist-difficulty-error">{errors.mainDifficulty}</small> : null}
      </label>
      <div className="form-submit">
        <button className="button button--primary" disabled={isSubmitting} type="submit">
          {isSubmitting ? "Registrando..." : "Entrar na lista de espera"} <span aria-hidden="true">↗</span>
        </button>
        <p aria-live="polite" className={feedback ? "form-feedback form-feedback--visible" : "form-feedback"}>
          {feedback}
        </p>
      </div>
      <p className="form-note">Seu interesse fica salvo apenas neste dispositivo enquanto a API oficial está em construção.</p>
    </form>
  );
}
