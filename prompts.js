const OpenAIApi = require("openai");
const openai = new OpenAIApi({
  apiKey: process.env.OPEN_AI_API_KEY,
});

const prompt = async (text) => {
  if (process.env.DISABLE_PROMPTS === "true")
    return "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Coat_of_Arms_of_Leon_with_the_Royal_Crest.svg/542px-Coat_of_Arms_of_Leon_with_the_Royal_Crest.svg.png";
  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: `Create a medieval-style design featuring ${text}. The design should blend hand-painted and natural light elements, with a realistic yet artistic appearance. The central elements should be in dynamic, lifelike poses, and the overall design should include minimal ornamental features. The background should have a slightly weathered look, as if it has been used or aged, and match the color rgba(60, 60, 60, 0.8). Ensure the design is on a transparent background (like a PNG file) so that it can be seamlessly incorporated into a website’s other design elements. The overall shape should be almond-like with a gently rounded top that tapers to a gentle point at the bottom. Incorporate intricate and elegant border styles while avoiding overly elaborate or heavy ornamentation. Ensure the design maintains a balance between photorealism and a hand-painted look. Avoid any additional backgrounds or elements that might detract from the transparent nature of the design. The edges of the image should be smooth and natural, making it appear as part of the page.`,
    // prompt: `Create a medieval-style design featuring ${text}. The design should blend hand-painted and natural light elements, with a realistic yet artistic appearance. The central elements should be in dynamic, lifelike poses, and the overall design should include minimal ornamental features. The background should have a slightly weathered look, as if it has been used or aged. Ensure the design is on a transparent background (like a PNG file) so that it can be seamlessly incorporated into a website’s other design elements. The overall shape should be almond-like with a gently rounded top that tapers to a gentle point at the bottom. Incorporate intricate and elegant border styles while avoiding overly elaborate or heavy ornamentation. Ensure the design maintains a balance between photorealism and a hand-painted look. Avoid any additional backgrounds or elements that might detract from the transparent nature of the design. The edges of the image should be smooth and natural, making it appear as part of the page.`,

    //     `Create a photorealistic medieval-style shield with vibrant colors and high contrast. The shield should look similar in style and quality to these examples:
    // - (https://awoiaf.westeros.org/index.php/File:House_Graves.svg)
    // - https://pin.it/4thEzUhAc
    // - (https://awoiaf.westeros.org/index.php/File:House_Bolton.svg)
    // - (https://awoiaf.westeros.org/index.php/File:House_Blackfyre_2.svg)
    // - (https://awoiaf.westeros.org/index.php/File:House_Gower.svg)
    // - (https://www.pngfind.com/mpng/TiTxmJo_game-of-thrones-house-sigils-png-transparent-png/)

    // The shield should have the following heraldic description: ${text}. The design should extend to the very edges of the shield, avoiding any kind of metallic or decorative bands around the perimeter. Ensure there are no ornate, metallic, or decorative borders. The overall design should aim for a realistic, detailed, and historically accurate appearance, avoiding a cartoonish or overly decorative look. Please make the design simpler and focus on the central elements.`,

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
  return response.data[0].url;
};

// test

module.exports = {
  prompt,
};
