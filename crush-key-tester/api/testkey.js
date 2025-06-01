export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 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"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Hey sexy 😘" }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(500).json({ error: "OpenAI API key test failed", details: data });
    }

    return res.status(200).json({ message: data.choices?.[0]?.message?.content });
  } catch (err) {
    return res.status(500).json({ error: "Server error", details: err.message });
  }
}