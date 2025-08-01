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
