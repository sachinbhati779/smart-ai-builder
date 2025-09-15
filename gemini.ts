/**
 * Client-side wrapper.
 * IMPORTANT: In production, call your serverless endpoint (e.g., /api/generate) that uses a SECRET key.
 * This example attempts to call a local proxy first, then falls back to a fake response for local dev.
 */

export async function generateText(prompt: string) {
  // Try server endpoint
  try {
    const resp = await fetch('/api/generate', {
      method: 'POST',
      headers:{ 'Content-Type':'application/json' },
      body: JSON.stringify({ prompt })
    })
    if (resp.ok) {
      const data = await resp.json()
      return data.text ?? ''
    }
    // fall through to fake response
  } catch (e) {
    // ignore
  }

  // Fallback for local dev (no key)
  return `<<local-fallback>> You asked: ${prompt.substring(0,300)}`
}
