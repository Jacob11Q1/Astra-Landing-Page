
import { GoogleGenAI } from "@google/genai";

export const generateSlogan = async (product: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate 3 catchy, futuristic, and premium marketing slogans for a product called "${product}". Return them as a simple list separated by newlines. No extra text.`,
      config: {
        temperature: 0.9,
        topP: 1,
        maxOutputTokens: 100,
      }
    });

    return response.text?.trim().split('\n') || [];
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
};
