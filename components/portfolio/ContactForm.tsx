"use client";

import { useState, type FormEvent } from "react";

import {
  sendContactMessage,
  type ContactField,
  type ContactMessageInput,
} from "@/services/contact";

type FormValues = ContactMessageInput;
type FieldErrors = Partial<Record<ContactField, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateValue(field: ContactField, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setFeedback("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const result = await sendContactMessage(values);

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
    <form className="contact-form" noValidate onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span>Nome</span>
          <input
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            aria-invalid={Boolean(errors.name)}
            autoComplete="name"
            name="name"
            onChange={(event) => updateValue("name", event.target.value)}
            placeholder="Como posso te chamar?"
            value={values.name}
          />
          {errors.name ? <small id="contact-name-error">{errors.name}</small> : null}
        </label>
        <label>
          <span>E-mail</span>
          <input
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            aria-invalid={Boolean(errors.email)}
            autoComplete="email"
            inputMode="email"
            name="email"
            onChange={(event) => updateValue("email", event.target.value)}
            placeholder="voce@exemplo.com"
            type="email"
            value={values.email}
          />
          {errors.email ? <small id="contact-email-error">{errors.email}</small> : null}
        </label>
      </div>
      <label>
        <span>Assunto</span>
        <input
          aria-describedby={errors.subject ? "contact-subject-error" : undefined}
          aria-invalid={Boolean(errors.subject)}
          name="subject"
          onChange={(event) => updateValue("subject", event.target.value)}
          placeholder="Sobre o que você quer conversar?"
          value={values.subject}
        />
        {errors.subject ? <small id="contact-subject-error">{errors.subject}</small> : null}
      </label>
      <label>
        <span>Mensagem</span>
        <textarea
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          aria-invalid={Boolean(errors.message)}
          name="message"
          onChange={(event) => updateValue("message", event.target.value)}
          placeholder="Conte um pouco sobre sua ideia, projeto ou desafio."
          rows={5}
          value={values.message}
        />
        {errors.message ? <small id="contact-message-error">{errors.message}</small> : null}
      </label>
      <div className="form-submit">
        <button className="button button--primary" disabled={isSubmitting} type="submit">
          {isSubmitting ? "Validando..." : "Enviar mensagem"} <span aria-hidden="true">↗</span>
        </button>
        <p aria-live="polite" className={feedback ? "form-feedback form-feedback--visible" : "form-feedback"}>
          {feedback}
        </p>
      </div>
    </form>
  );
}
