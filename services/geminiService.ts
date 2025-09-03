
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

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
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Generate a challenging high-school level math olympiad problem. The problem can be from any of these categories: Number Theory, Algebra, Combinatorics, or Geometry. Present only the problem statement itself, without any introductory text, category labels, or the solution. Make it unique and interesting.",
    });
    return cleanResponse(response.text);
  } catch (error) {
    console.error("Error generating problem:", error);
    throw new Error("Failed to communicate with the AI service.");
  }
};

export const generateSolution = async (problem: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Provide a detailed, step-by-step solution for the following math olympiad problem. Explain the logic and any theorems used clearly. \n\nProblem:\n${problem}`,
    });
    return cleanResponse(response.text);
  } catch (error) {
    console.error("Error generating solution:", error);
    throw new Error("Failed to communicate with the AI service for the solution.");
  }
};
