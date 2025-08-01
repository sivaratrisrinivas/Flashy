Flashy
A live Next.js demo app showing Flash—real-time, serverless autocomplete built on Upstash Redis.

<img width="1917" height="970" alt="image" src="https://github.com/user-attachments/assets/9b777680-f5f7-47c1-b702-69c1ab63e081" />

Showcases Flash SDK: Demonstrates blazing-fast autocomplete with beautiful UI and cloud-based persistence.

End-to-End Example: Try the experience—type any letter to see relevant suggestions powered by Upstash Redis, served securely via API routes.

Modern Stack: Fully server-rendered (SSR), Next.js App Router, Tailwind CSS, TypeScript, Bun or Node.js.

🚀 Live Demo
https://flashy-2acr.onrender.com

Getting Started (Local Development)
Clone the repo:

bash
git clone https://github.com/sivaratrisrinivas/Flashy.git
cd Flashy
Install dependencies (using Bun or npm):

bash
bun install
# or
npm install
Set Up Environment:

Create a .env.local in the project root:

text
UPSTASH_REDIS_URL=your-upstash-redis-url
UPSTASH_REDIS_TOKEN=your-upstash-redis-token
Seed Redis with demo data (optional, but recommended):

bash
bun seed.ts
# or
npm run seed
Start the app:

bash
bun run dev
# or
npm run dev
Open http://localhost:3000 and try typing—autocomplete is live!

Features
Real-Time Suggestions: Instantly see relevant options as you type—across the full alphabet.

Secure by Default: All database access (Upstash Redis) is done via API routes, never exposing secrets to the client.

Polished UX: Fully responsive, themed interface with a minimalist “Flash” title and visually rich dropdown.

Server-Side Rendering: Next.js API routes handle fetching, seeding, and serving data efficiently.

Deployment
Deploy your own copy (in minutes!):

Push your repo to GitHub.

Create an Upstash Redis database (free tier supported).

Deploy to Render.com or Vercel:

Set required environment variables.

Build/start commands: bun install && bun run build, bun run dev, etc.

Visit your live URL and share it with the world!
