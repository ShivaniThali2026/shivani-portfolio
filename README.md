# Shivani Thali Portfolio

A Next.js portfolio for marketing analytics, growth strategy, SEO, and digital marketing work, with GitHub OAuth login and GitHub profile/repository display.

## Setup

1. Copy `.env.local.example` to `.env.local`.
2. Add your GitHub OAuth Client Secret.
3. Install dependencies:

```bash
npm install
```

4. Run locally:

```bash
npm run dev
```

5. Open `http://localhost:3000`.

## GitHub OAuth Callback URL

Use this in GitHub OAuth App settings:

```text
http://localhost:3000/api/auth/callback/github
```
