# Flashy

A Next.js demo app showcasing real-time autocomplete built with Upstash Redis.

![Flashy Demo](https://github.com/user-attachments/assets/9b777680-f5f7-47c1-b702-69c1ab63e081)

## Overview

Flashy demonstrates a fast autocomplete system with a clean interface and cloud-based data storage. Type any letter to see instant suggestions powered by Upstash Redis, served securely through API routes. The system learns from user interactions, improving suggestion relevance over time through adaptive scoring.

Built with Next.js App Router, Tailwind CSS, TypeScript, and supports both Bun and Node.js.

## Why Flashy ?

Flashy showcases the true potential of developing fast, reliable, and scalable autocomplete solutions powered by Upstash's globally distributed Redis infrastructure. It demonstrates how developers can seamlessly integrate Upstash Redis into modern web and serverless applications to provide instant, relevant search suggestions that scale effortlessly with user demand. By highlighting a performant, developer-friendly experience with TypeScript and Next.js, Flashy directly addresses the common challenges of building real-time search features—often plagued by latency and complexity. This aligns perfectly with Upstash’s mission to simplify distributed data access, delivering powerful functionality without the overhead of managing complex infrastructure. Flashy serves as a practical example and reference implementation, enabling Upstash and its community to showcase the ease of Redis for real-time use cases, encourage wider adoption through best practices, and provide a foundation for advanced features like fuzzy search, personalization, and analytics.


## Live Demo

https://flashy-2acr.onrender.com

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- An Upstash Redis database

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sivaratrisrinivas/Flashy.git
   cd Flashy
   ```

2. Install dependencies:
   ```bash
   bun install
   # or
   npm install
   ```

3. Set up environment variables:
   
   Create a `.env.local` file in the project root:
   ```env
   UPSTASH_REDIS_URL=your-upstash-redis-url
   UPSTASH_REDIS_TOKEN=your-upstash-redis-token
   ```

4. Seed the database with sample data (recommended):
   ```bash
   bun seed.ts
   # or
   npm run seed
   ```

5. Start the development server:
   ```bash
   bun run dev
   # or
   npm run dev
   ```

6. Open http://localhost:3000 and start typing to see the autocomplete in action.

## Features

- **Real-time suggestions**: See relevant options instantly as you type
- **Adaptive scoring**: Suggestions improve over time as users select them
- **Secure data handling**: All database operations happen through secure API routes
- **Responsive design**: Works seamlessly across all device sizes
- **Server-side rendering**: Fast initial page loads with Next.js
- **Keyboard navigation**: Use arrow keys to navigate suggestions

## Deployment

Deploy your own instance:

1. Push your repository to GitHub
2. Create an Upstash Redis database (free tier available)
3. Deploy to your preferred platform (Render, Vercel, etc.):
   - Set the required environment variables
   - Use build commands: `bun install && bun run build`
   - Use start command: `bun run dev`
4. Share your live URL with others
