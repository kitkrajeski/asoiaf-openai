const OpenAIApi = require("openai");
const openai = new OpenAIApi({
  apiKey: process.env.OPEN_AI_API_KEY,
});

const prompt = async (text) => {
  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: `give me a medieval shield with the following description: ${text}`,
    n: 1,
    size: "1024x1024",
  });
  return response.data[0].url;
};

// test

module.exports = {
  prompt,
};
