import { GoogleGenAI } from "@google/genai";

const API_KEY_STORAGE_KEY = 'HUGGINGMATH_API_KEY';

const getClient = (): GoogleGenAI => {
  const apiKey = sessionStorage.getItem(API_KEY_STORAGE_KEY);
  if (!apiKey) {
    // Using a specific message string for the UI to check against.
    throw new Error('API_KEY_NOT_SET');
  }
  return new GoogleGenAI({ apiKey });
};

const cleanResponse = (text: string): string => {
  let cleanedText = text.trim();
  const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
  const match = cleanedText.match(fenceRegex);
  if (match && match[2]) {
    cleanedText = match[2].trim();
  }
  return cleanedText;
};

export const generateProblem = async (): Promise<string> => {
  try {
    const ai = getClient();
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Generate a challenging high-school level math olympiad problem. The problem can be from any of these categories: Number Theory, Algebra, Combinatorics, or Geometry. Present only the problem statement itself, without any introductory text, category labels, or the solution. Make it unique and interesting.",
    });
    return cleanResponse(response.text);
  } catch (error) {
    console.error("Error generating problem:", error);
    if (error instanceof Error && error.message === 'API_KEY_NOT_SET') {
      throw error; // Re-throw to be caught by the UI
    }
    // For other errors, provide a more generic but helpful message
    throw new Error("Failed to generate problem. Your API key might be invalid or the service may be unavailable.");
  }
};

export const generateSolution = async (problem: string): Promise<string> => {
  try {
    const ai = getClient();
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Provide a detailed, step-by-step solution for the following math olympiad problem. Explain the logic and any theorems used clearly. \n\nProblem:\n${problem}`,
    });
    return cleanResponse(response.text);
  } catch (error) {
    console.error("Error generating solution:", error);
    if (error instanceof Error && error.message === 'API_KEY_NOT_SET') {
      throw error;
    }
    throw new Error("Failed to generate solution. Your API key might be invalid or the service may be unavailable.");
  }
};
