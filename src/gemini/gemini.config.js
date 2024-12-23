// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
// const model = genAI.getGenerativeModel({ model: import.meta.env.VITE_GEMINI_MODEL });

// export { model }

// const prompt = "Explain how AI works";

// const result = await model.generateContent(prompt);
// console.log(result.response.text());

// import dotenv from "dotenv";

// dotenv.config({
//   path: "./.env",
// });

import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: import.meta.env.VITE_GEMINI_MODEL,
});

// const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 40,
//   maxOutputTokens: 8192,
//   responseMimeType: "text/plain",
// };

// window.localStorage.setItem("GeminiHistory",JSON.stringify(`[
//   {
//     role: "user",
//     parts: [{ text: "Hello" }]
//   },
//   {
//     role: "model",
//     parts: [{ text: "Great to meet you. What would you like to know?" }]
//   }
// ]`));

// const mreaHistory = window.localStorage.getItem('GeminiHistory')
// console.log(mreaHistory);

// const GeminiHistory = JSON.parse(mreaHistory)
// console.log(GeminiHistory);
// window.localStorage.removeItem("GeminiHistory");

// async function run() {
//   const chatSession = model.startChat({
//      history: [],
//   });

//   const result = await chatSession.sendMessage("What is wikipedia");
//   console.log(result.response.text());
// }
// run()

export { model };
