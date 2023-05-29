'use client'

const API_KEY = '' // <-- Add yours here!

import { useState } from 'react'

export default function Home() {
  const [audioFile, setAudioFile] = useState<Blob | string>()
  const [result, setResult] = useState<string>()

  const transcribeAudio = async () => {
    const formData = new FormData()

    formData.append('model', 'whisper-1')
    formData.append('file', audioFile as Blob)

    try {
      const res = await fetch('https://api.openai.com/v1/audio/transcriptions', {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${API_KEY}`
        },
        method: 'POST',
        body: formData
      })
      const data: { text: string } = await res.json()
      setResult(data.text)
      console.log({ data })
    } catch (error) {
      console.log({ error })
    }
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Whisper API testing</h1>
      <input
        type='file'
        onChange={e => {
          if (e.target.files) setAudioFile(e.target.files[0])
        }}
      />
      {result && <p>{result}</p>}
      <button onClick={transcribeAudio}>Test!</button>
    </main>
  )
}
