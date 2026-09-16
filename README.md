# Adpence Landing Page

AI software development landing page for value-based SaaS companies.

## Structure

```
src/
  index.html      — Landing page
  contact.html     — Contact page with email form
  styles.css       — All styling
  worker.js        — Worker handling static assets + contact form email
wrangler.jsonc     — Cloudflare Workers config with email binding
```

## Deploy

1. **Onboard your domain for Email Service**
   - In the Cloudflare dashboard, go to **Compute > Email Service > Email Sending**
   - Select **Onboard Domain** and choose `adpence.com`
   - Cloudflare will add the necessary DNS records (MX, SPF, DKIM, DMARC)

2. **Deploy with Wrangler**
   ```bash
   npm install
   npx wrangler deploy
   ```

3. **Add custom domain**
   - In the Cloudflare dashboard, open the `adpence-landing` Worker
   - Go to **Domains** tab and add `adpence.com`

## How the contact form works

The contact form on `/contact` sends a POST request to `/api/contact`.
The Worker constructs an email using the `send_email` binding and sends it
to `support@adpence.com` from `noreply@adpence.com`.