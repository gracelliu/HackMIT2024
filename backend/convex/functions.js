const COHERE_API_KEY = process.env.COHERE_API_KEY;

const response = await fetch("https://api.cohere.ai/generate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${COHERE_API_KEY}`,
  },
  body: JSON.stringify({
    model: "command-xlarge-nightly", // Cohere's model name, you can choose others
    prompt: "Say this is a test",
    max_tokens: 50, // Equivalent to `max_tokens` in OpenAI
    temperature: 0.75, // You can set the temperature for randomness (optional)
  }),
});

const data = await response.json();
console.log(data);
