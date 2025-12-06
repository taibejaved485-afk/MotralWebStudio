import { GoogleGenAI } from "@google/genai";

// Initialize Gemini client safely
const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  const ai = getClient();
  if (!ai) return "I'm sorry, I cannot connect to the server right now. Please check the API configuration.";

  try {
    const systemInstruction = `
      You are the helpful AI assistant for 'Motral Web Studio', a premium web development agency.
      
      Our Services:
      1. E-commerce Solutions (Shopify, WooCommerce, Custom)
      2. WordPress Web Development (Themes, Plugins, Customization)
      3. Custom Web Development (React, Node.js, Next.js)
      4. Website Maintenance (Security updates, backups, bug fixes)
      5. Speed Optimization (Core Web Vitals, caching, image optimization)

      Tone: Professional, enthusiastic, concise, and helpful.
      Goal: Help the user understand which service they need or answer questions about web development.
      Constraint: Keep answers under 100 words unless asked for a detailed explanation.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userMessage,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble thinking right now. Please try again later.";
  }
};
