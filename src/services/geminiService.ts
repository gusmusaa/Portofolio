import { GoogleGenAI, Chat } from "@google/genai";
import { PORTFOLIO_OWNER, OWNER_BIO, SKILLS, CERTIFICATES } from '../constants';

// Initialize Gemini Client
// Using process.env.API_KEY as per strict instructions.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Construct the system instruction to give the AI context about the portfolio owner.
const systemInstruction = `
You are an AI assistant for the portfolio website of ${PORTFOLIO_OWNER}.
Your goal is to answer questions about ${PORTFOLIO_OWNER}'s skills, experience, and certifications in a professional yet friendly manner.

Here is the context about ${PORTFOLIO_OWNER}:
Bio: "${OWNER_BIO}"

Skills:
${SKILLS.map(s => `- ${s.name} (${s.category})`).join('\n')}

Certificates:
${CERTIFICATES.map(c => `- ${c.title} from ${c.issuer} (Date: ${c.date})`).join('\n')}

Guidelines:
1. Keep answers concise (under 3 sentences unless asked for detail).
2. If asked about contact info, suggest they use the contact section (email: contact@alexdev.com).
3. Be enthusiastic about technology.
4. If you don't know the answer based on the provided context, politely say you don't have that information but the user can email directly.
`;

export const createChatSession = (): Chat => {
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: systemInstruction,
      temperature: 0.7,
    },
  });
};
