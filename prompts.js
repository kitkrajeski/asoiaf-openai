const OpenAIApi = require("openai");
const openai = new OpenAIApi({
  apiKey: process.env.OPEN_AI_API_KEY,
});

const prompt = async (text) => {
  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: `Create a photorealistic medieval-style shield with vibrant colors and high contrast. The shield should look similar in style and quality to these examples:
- (https://awoiaf.westeros.org/index.php/File:House_Graves.svg)
- https://pin.it/4thEzUhAc
- (https://awoiaf.westeros.org/index.php/File:House_Bolton.svg)
- (https://awoiaf.westeros.org/index.php/File:House_Blackfyre_2.svg)
- (https://awoiaf.westeros.org/index.php/File:House_Gower.svg)
- (https://www.pngfind.com/mpng/TiTxmJo_game-of-thrones-house-sigils-png-transparent-png/)

The shield should have the following heraldic description: ${text}. The design should extend to the very edges of the shield, avoiding any kind of metallic or decorative bands around the perimeter. Ensure there are no ornate, metallic, or decorative borders. The overall design should aim for a realistic, detailed, and historically accurate appearance, avoiding a cartoonish or overly decorative look. Please make the design simpler and focus on the central elements.`,

    // `Create a medieval-style shield with the following heraldic description: ${text}. Ensure the shield appears detailed and polished with vibrant colors. Use high contrast to make the symbols and patterns stand out. The shield should look similar in style and quality to these examples:
    // - Green and white gyronny, a double-headed eagle counter-charged, gold beak and talons (https://awoiaf.westeros.org/index.php/File:House_Graves.svg)
    // - A golden kraken on a black field (https://awoiaf.westeros.org/index.php/File:House_Greyjoy.svg)
    // - Per pale black and pink, a countercharged two-headed pelican (https://awoiaf.westeros.org/index.php/File:Dunn.png)
    // - Two griffins combatent countercharged on red and white (https://awoiaf.westeros.org/index.php/File:House_Connington.svg)
    // - A red flayed man on pink de sang (https://awoiaf.westeros.org/index.php/File:House_Bolton.svg)
    // - A three-headed dragon breathing flames, black on red (https://awoiaf.westeros.org/index.php/File:House_Blackfyre_2.svg)
    // - Nine yellow trefoils on a black cross on ermine(https://awoiaf.westeros.org/index.php/File:House_Gower.svg)
    // - Per pale, white stars strewn on indigo, an orange sun on yellow (https://awoiaf.westeros.org/index.php/File:House_Sloane.svg)
    // - A red cockatrice with black snake in beak on gold(https://awoiaf.westeros.org/index.php/File:House_Gargalen.svg),
    // .`,
    n: 1,
    size: "1024x1024",
  });
  console.log(prompt);
  return response.data[0].url;
};

// test

module.exports = {
  prompt,
};
