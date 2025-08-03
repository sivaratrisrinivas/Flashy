import { NextResponse } from 'next/server';
import { Autocomplete } from 'flash-upstash-autocomplete';
import { Redis } from '@upstash/redis';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query') || '';
  const limit = parseInt(searchParams.get('limit') || '5', 10);

  const redisClient = new Redis({
    url: process.env.UPSTASH_REDIS_URL!,
    token: process.env.UPSTASH_REDIS_TOKEN!
  });
  const autocomplete = new Autocomplete(redisClient);

  const suggestions = await autocomplete.getSuggestions(query, { limit });

  return NextResponse.json(suggestions);
}

// New POST for updating scores
export async function POST(request: Request) {
  const body = await request.json();
  const { item, increment = 1 } = body;  // Expect item and optional increment

  if (!item) {
    return NextResponse.json({ error: 'Item required' }, { status: 400 });
  }

  const redisClient = new Redis({
    url: process.env.UPSTASH_REDIS_URL!,
    token: process.env.UPSTASH_REDIS_TOKEN!
  });
  const autocomplete = new Autocomplete(redisClient);

  await autocomplete.addSuggestion(item, increment);
  return NextResponse.json({ success: true });
}

