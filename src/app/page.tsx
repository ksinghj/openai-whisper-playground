'use client'

import { useState } from "react"

export default function Home() {
  const [audioFile, setAudioFile] = useState()

  const transcribeAudio = async () => {
    const formData = new FormData()

    formData.append('model', 'whisper-1')
    formData.append('file', audioFile)

    try {
      const res = await fetch('https://api.openai.com/v1/audio/transcriptions', {
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer API_KEY'
        },
        method: 'POST',
        body: formData
      })
      const data = await res.json()
      console.log({ data })
    } catch (error) {
      console.log({ error })
    }
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Whisper API testing</h1>
      <input type="file" onChange={(e) => setAudioFile(e.target.files[0])} />
      <button onClick={transcribeAudio}>Test!</button>
    </main>
  )
}
