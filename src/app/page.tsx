'use client'

export default function Home() {
  const audioFile = require('../assets/audio.mp3')

  const transcribeAudio = async () => {
    const formData = new FormData()

    formData.append('file', audioFile)
    formData.append('name', 'test')

    try {
      // https://api.openai.com/v1/audio/transcriptions ??
      const res = await fetch('/api', {
        headers: {
          Accept: 'application/json'
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
      <button onClick={transcribeAudio}>Test!</button>
    </main>
  )
}
