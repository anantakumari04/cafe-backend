import express from "express";
import fetch from "node-fetch";
const router = express.Router();

router.post("/gemini-chat", async (req, res) => {
  const userMessage = req.body.message;
  const apiKey = process.env.GEMINI_API_KEY; // Set this up in your .env file

  const geminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;
  const payload = {
    contents: [{ parts: [{ text: userMessage }] }]
  };

  try {
    const geminiResp = await fetch(geminiEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const result = await geminiResp.json();
    const reply =
      result?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't understand.";
    res.json({ reply });
  } catch (err) {
    res.status(500).json({ reply: "Sorry, something went wrong!" });
  }
});

export default router;
