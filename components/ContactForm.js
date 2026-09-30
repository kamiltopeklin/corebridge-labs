"use client";
import { useState } from "react";
const initialForm = {
  name: "",
  email: "",
  company: "",
  service: "",
  message: "",
};
export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");
  const updateField = (e) =>
    setForm((current) => ({ ...current, [e.target.name]: e.target.value }));
  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json();
      if (!response.ok)
        throw new Error(result.error || "Unable to send your request.");
      setStatus("success");
      setFeedback(`Thanks. A lead at Corebridge Labs will reply shortly.`);
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setFeedback(error.message);
    }
  }
  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <div className="formGrid">
        <input
          name="name"
          value={form.name}
          onChange={updateField}
          placeholder="Your name *"
          required
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={updateField}
          placeholder="Your email *"
          required
        />
        <input
          name="company"
          value={form.company}
          onChange={updateField}
          placeholder="Company (optional)"
        />
        <select
          name="service"
          value={form.service}
          onChange={updateField}
          required
        >
          <option value="" disabled>
            How can I help? *
          </option>
          <option>Hire a dedicated team</option>
          <option>Blockchain & Web3</option>
          <option>Web development</option>
          <option>Embed specialists</option>
          <option>AI / LLM assessment</option>
          <option>Careers</option>
          <option>Partnerships</option>
          <option>Something else</option>
        </select>
      </div>
      <textarea
        name="message"
        value={form.message}
        onChange={updateField}
        placeholder="Tell us about your project *"
        rows="5"
        required
      />
      <button
        className="primaryButton submitButton"
        type="submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending…" : "Send Project Request →"}
      </button>
      {feedback ? <p className={`formFeedback ${status}`}>{feedback}</p> : null}
    </form>
  );
}
