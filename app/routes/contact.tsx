import { useEffect, useRef } from "react";
import { Form, useActionData, useNavigation, useSearchParams } from "react-router";
import type { Route } from "./+types/contact";
import { Icon } from "~/components/icons";
import { Reveal, Watermark } from "~/components/motion";
import { Eyebrow, PageHero } from "~/components/ui";
import { contact, enquiryTypes, img, privacyHref } from "~/content/site";
import { seo } from "~/seo";

const REQUIRED = "This field is required.";

type Errors = Partial<
  Record<"fullName" | "email" | "telephone" | "enquiryType" | "message" | "consent", string>
>;

export function meta() {
  return seo({
    title: "Contact Careknect — Let's discuss what you need",
    description:
      "Contact Careknect about product demonstrations, professional services, partnerships or general enquiries.",
    path: "/contact",
  });
}

function validate(data: Record<string, string>): Errors {
  const errors: Errors = {};
  if (!data.fullName) errors.fullName = REQUIRED;
  if (!data.email) errors.email = REQUIRED;
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Please enter a valid email address.";
  if (data.telephone && !/^\+?[0-9][0-9\s()-]{7,}$/.test(data.telephone))
    errors.telephone = "Please enter a valid telephone number, including the country code.";
  if (!enquiryTypes.some((t) => t.value === data.enquiryType)) errors.enquiryType = REQUIRED;
  if (!data.message) errors.message = REQUIRED;
  if (data.consent !== "yes")
    errors.consent =
      "Please confirm that you have read the Privacy Policy and consent to the use of your information.";
  return errors;
}

/**
 * Delivers the enquiry to ENQUIRY_WEBHOOK_URL. Success is only reported when
 * that delivery succeeds, so an enquiry is never silently lost.
 */
export async function action({ request }: Route.ActionArgs) {
  const form = await request.formData();
  const field = (name: string) => String(form.get(name) ?? "").trim();
  const data = {
    fullName: field("fullName"),
    organisation: field("organisation"),
    jobTitle: field("jobTitle"),
    email: field("email"),
    telephone: field("telephone"),
    enquiryType: field("enquiryType"),
    message: field("message"),
    consent: field("consent"),
  };

  const errors = validate(data);
  if (Object.keys(errors).length > 0) {
    return { status: "invalid" as const, errors };
  }

  const webhook = process.env.ENQUIRY_WEBHOOK_URL;
  if (!webhook) {
    console.error("Enquiry not delivered: ENQUIRY_WEBHOOK_URL is not set.");
    return { status: "failed" as const };
  }

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, submittedAt: new Date().toISOString() }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) throw new Error(`Webhook responded with ${response.status}`);
  } catch (error) {
    console.error("Enquiry not delivered:", error);
    return { status: "failed" as const };
  }

  return { status: "sent" as const };
}

function Field({
  id,
  label,
  required,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="field">
      <label htmlFor={id}>
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      {children}
      {hint ? <small id={`${id}-hint`}>{hint}</small> : null}
      {error ? (
        <small id={`${id}-error`} className="field-error">
          {error}
        </small>
      ) : null}
    </div>
  );
}

const describedBy = (id: string, error?: string, hint?: boolean) =>
  [error ? `${id}-error` : null, hint ? `${id}-hint` : null].filter(Boolean).join(" ") || undefined;

function EnquiryForm() {
  const result = useActionData<typeof action>();
  const navigation = useNavigation();
  const [params] = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);
  const noticeRef = useRef<HTMLDivElement>(null);
  const submitting = navigation.state === "submitting";
  const errors: Errors = result?.status === "invalid" ? result.errors : {};
  const requested = params.get("enquiry") ?? "";
  const preselect = enquiryTypes.some((t) => t.value === requested) ? requested : "";

  useEffect(() => {
    if (result?.status === "invalid") {
      formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
    } else if (result) {
      noticeRef.current?.focus();
    }
  }, [result]);

  if (result?.status === "sent") {
    return (
      <div ref={noticeRef} tabIndex={-1} className="form-notice form-notice--success" role="status">
        <strong>Thank you for contacting Careknect.</strong>
        <p>
          Your enquiry has been received. A member of our team will contact you using the details
          provided.
        </p>
      </div>
    );
  }

  return (
    <Form method="post" noValidate ref={formRef} className="enquiry-form" id="enquiry">
      {result?.status === "failed" ? (
        <div ref={noticeRef} tabIndex={-1} className="form-notice form-notice--error" role="alert">
          <strong>Your enquiry could not be sent.</strong>
          <p>
            Please try again. If the problem continues, contact us directly at{" "}
            <a href={contact.emailHref}>{contact.email}</a> or call{" "}
            <a href={contact.phoneHref}>{contact.phone}</a>.
          </p>
        </div>
      ) : null}

      <Field id="full-name" label="Full Name" required error={errors.fullName}>
        <input
          id="full-name"
          name="fullName"
          type="text"
          autoComplete="name"
          required
          aria-invalid={errors.fullName ? true : undefined}
          aria-describedby={describedBy("full-name", errors.fullName)}
        />
      </Field>
      <Field
        id="organisation"
        label="Organisation"
        hint="Leave blank if you are enquiring as an individual."
      >
        <input
          id="organisation"
          name="organisation"
          type="text"
          autoComplete="organization"
          aria-describedby="organisation-hint"
        />
      </Field>
      <Field id="job-title" label="Job Title or Role">
        <input id="job-title" name="jobTitle" type="text" autoComplete="organization-title" />
      </Field>
      <Field id="email" label="Email Address" required error={errors.email}>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={describedBy("email", errors.email)}
        />
      </Field>
      <Field id="telephone" label="Telephone/WhatsApp Number" error={errors.telephone}>
        <input
          id="telephone"
          name="telephone"
          type="tel"
          autoComplete="tel"
          aria-invalid={errors.telephone ? true : undefined}
          aria-describedby={describedBy("telephone", errors.telephone)}
        />
      </Field>
      <Field id="enquiry-type" label="Nature of Enquiry" required error={errors.enquiryType}>
        <select
          id="enquiry-type"
          name="enquiryType"
          required
          defaultValue={preselect}
          key={preselect}
          aria-invalid={errors.enquiryType ? true : undefined}
          aria-describedby={describedBy("enquiry-type", errors.enquiryType)}
        >
          <option value="">Select an option</option>
          {enquiryTypes.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </Field>
      <Field id="message" label="Message" required error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={describedBy("message", errors.message)}
        />
      </Field>

      <div className="field field--consent">
        <label htmlFor="consent">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            value="yes"
            required
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={describedBy("consent", errors.consent)}
          />
          <span>
            I consent to Careknect Limited collecting and using the information provided to respond
            to my enquiry. I have read the <a href={privacyHref}>Privacy Policy</a>.
            <span aria-hidden="true"> *</span>
          </span>
        </label>
        {errors.consent ? (
          <small id="consent-error" className="field-error">
            {errors.consent}
          </small>
        ) : null}
      </div>

      <button type="submit" className="btn btn--primary form-submit" disabled={submitting}>
        {submitting ? "Sending…" : "Send Enquiry"}
      </button>
    </Form>
  );
}

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="CONNECT WITH CAREKNECT"
        title="Let’s discuss what you need."
        image={img.heroContact}
      />

      <section className="inner-section contact-section">
        <Watermark className="watermark--contact" />
        <div className="wrap contact-grid">
          <div>
            <Eyebrow>ENQUIRY FORM</Eyebrow>
            <Reveal as="h2" anim="fade-up-1" className="h2">
              Send us an enquiry
            </Reveal>
            <Reveal as="p" anim="fade-up-1" className="body-text">
              Whether you are exploring one of our digital health products, seeking professional
              services or interested in a partnership, we would be pleased to hear from you. Tell us
              what you are looking for, and the appropriate member of our team will respond.
            </Reveal>
            <Reveal anim="fade-up">
              <EnquiryForm />
            </Reveal>
          </div>

          <Reveal anim="scale-up" duration={1.8} className="contact-map">
            <iframe
              src={contact.mapSrc}
              title="Map showing the Careknect office at the Mövenpick Ambassador Hotel, Accra"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="contact-panel">
              <div>
                <h3>
                  <span className="eyebrow-ring" aria-hidden="true" />
                  Telephone/WhatsApp
                </h3>
                <a href={contact.phoneHref}>{contact.phone}</a>
              </div>
              <div>
                <h3>
                  <span className="eyebrow-ring" aria-hidden="true" />
                  Office
                </h3>
                <p>{contact.address}</p>
              </div>
              <div>
                <h3>
                  <span className="eyebrow-ring" aria-hidden="true" />
                  Email
                </h3>
                <a href={contact.emailHref}>{contact.email}</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
