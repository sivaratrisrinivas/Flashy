import { Autocomplete } from 'flash-upstash-autocomplete';
import { Redis } from '@upstash/redis';

(async () => {
  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_URL!,
    token: process.env.UPSTASH_REDIS_TOKEN!
  });
  const ac = new Autocomplete(redis);

  await redis.del("autocomplete:suggestions");

  const sample = [
    { item: "apple", score: 9 },
    { item: "apricot", score: 4 },
    { item: "banana", score: 7 },
    { item: "blueberry", score: 5 },
    { item: "cherry", score: 6 },
    { item: "cantaloupe", score: 3 },
    { item: "cranberry", score: 4 },
    { item: "date", score: 2 },
    { item: "dragonfruit", score: 1 },
    { item: "elderberry", score: 5 },
    { item: "fig", score: 3 },
    { item: "grape", score: 8 },
    { item: "guava", score: 3 },
    { item: "honeydew", score: 2 },
    { item: "icecream bean", score: 1 },
    { item: "jackfruit", score: 4 },
    { item: "kiwi", score: 3 },
    { item: "lemon", score: 5 },
    { item: "mango", score: 8 },
    { item: "nectarine", score: 2 },
    { item: "olive", score: 3 },
    { item: "papaya", score: 4 },
    { item: "peach", score: 5 },
    { item: "pineapple", score: 7 },
    { item: "quince", score: 2 },
    { item: "raspberry", score: 6 },
    { item: "strawberry", score: 10 },
    { item: "tangerine", score: 3 },
    { item: "ugli fruit", score: 1 },
    { item: "vanilla", score: 2 },
    { item: "watermelon", score: 6 },
    { item: "xigua", score: 1 },
    { item: "yellow passion fruit", score: 2 },
    { item: "zucchini", score: 1 }
  ];

  for (const { item, score } of sample) {
    await ac.addSuggestion(item, score);
  }
  console.log('Seeded Upstash with fruits and dreamy words!');
})();
