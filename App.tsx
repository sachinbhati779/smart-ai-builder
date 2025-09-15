import React, { useState } from 'react'
import { generateText } from './api/gemini'

export default function BuilderApp() {
  const [prompt, setPrompt] = useState('')
  const [reply, setReply] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleGenerate() {
    setLoading(true)
    try {
      const res = await generateText(prompt)
      setReply(res ?? 'No response')
    } catch (e) {
      setReply('Error: ' + (e as Error).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{fontFamily:'Inter, Roboto, system-ui, -apple-system', padding:20, maxWidth:800, margin:'0 auto'}}>
      <header>
        <h1>Smart AI Builder</h1>
        <p style={{color:'#555'}}>A lightweight frontend to demo Gemini-style calls (replace with your server endpoint when deploying).</p>
      </header>

      <main>
        <textarea
          placeholder="Enter prompt..."
          value={prompt}
          onChange={(e)=>setPrompt(e.target.value)}
          rows={6}
          style={{width:'100%', padding:10, fontSize:16}}
        />

        <div style={{marginTop:12, display:'flex', gap:8}}>
          <button onClick={handleGenerate} disabled={loading || !prompt}>
            {loading ? 'Generating...' : 'Generate'}
          </button>
          <button onClick={()=>{ setPrompt(''); setReply('') }}>Clear</button>
        </div>

        <section style={{marginTop:20}}>
          <h3>Output</h3>
          <pre style={{whiteSpace:'pre-wrap', background:'#f7f7f7', padding:12, borderRadius:6, minHeight:120}}>{reply}</pre>
        </section>
      </main>

      <footer style={{marginTop:30, color:'#777'}}>
        <small>Tip: Add a serverless function to hide your real API key. See /api/generate.ts (vercel) or README.</small>
      </footer>
    </div>
  )
}
