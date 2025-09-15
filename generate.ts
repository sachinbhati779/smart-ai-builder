import type { VercelRequest, VercelResponse } from '@vercel/node'

/**
 * Example Vercel serverless function that proxies a request to an AI provider.
 * Replace the fetch URL and payload with your provider's API (Gemini / OpenAI / etc.)
 * and ensure you add the secret `GEMINI_API_KEY` in Vercel env vars.
 */

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }
  const { prompt } = req.body || {}
  if (!prompt) {
    res.status(400).json({ error: 'Missing prompt' })
    return
  }

  // Example proxying behaviour (pseudo)
  try {
    // Replace with actual provider endpoint & request shape.
    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      return res.status(500).json({ error: 'Server missing API key' })
    }

    // PSEUDO: In practice call the real API here and forward the response.
    // const r = await fetch('https://api.yourprovider.com/generate', { ... })

    // For demo purposes we return a fake response:
    const text = `<<server-proxy-demo>> Received prompt: ${String(prompt).slice(0,300)}`
    res.status(200).json({ text })
  } catch (err) {
    res.status(500).json({ error: String(err) })
  }
}
