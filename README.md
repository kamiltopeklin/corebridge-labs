# Corebridge Labs — Next.js landing page

A clean Next.js App Router implementation of the supplied Corebridge Labs landing-page reference.

## Important implementation details

- All page copy, buttons, technology tags, statistics, navigation, process steps and form fields are real HTML/React elements.
- The Earth hero, three project showcases and mountain scene are independent high-resolution static image files under `public/images/`.
- Images are rendered through `next/image` and are never screenshots of the surrounding page text.
- Source files are formatted/readable rather than minified one-line code.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Contact form

The form performs a real `POST /api/contact` request. The API validates the fields, appends submissions to `data/submissions.jsonl` when running on a normal Node server, and emails each request to `admin@corebridgelabs.org` using Resend.

Set `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` in the deployment environment. The sender address must be verified with Resend. Requests return an error if email delivery is not configured or Resend rejects the message.

For production, set `CONTACT_WEBHOOK_URL` to an HTTPS endpoint that **you control**. The API will forward the validated submission to that endpoint as JSON. The project intentionally does not transmit visitor names/emails/messages to an unknown random third-party server.

Example payload:

```json
{
  "id": "generated-uuid",
  "createdAt": "ISO timestamp",
  "name": "Visitor Name",
  "email": "visitor@example.com",
  "company": "Example Inc",
  "service": "Backend Engineering",
  "message": "Project details"
}
```

> Note: local filesystem persistence is not durable on many serverless hosts such as Vercel. Configure a persistent database or use `CONTACT_WEBHOOK_URL` for submission archival in production.
