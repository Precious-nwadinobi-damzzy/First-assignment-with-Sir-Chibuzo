export async function PriceAPI() {
  const reply = await fetch("https://dummyjson.com/posts");
  if (!reply.ok) return "The server could not load the pricing data.";
  return await reply.json();
}
