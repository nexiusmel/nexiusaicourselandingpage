import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

// Initialize the Gemini Client
// The API key must be obtained exclusively from the environment variable process.env.API_KEY.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateAIResponse = async (userMessage: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "I'm sorry, I didn't get that.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing high traffic. Please try again later.";
  }
};