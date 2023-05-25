const { Configuration, OpenAIApi } = require('openai')
import { NextResponse } from 'next/server'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

export async function POST(request: Request) {
  const transcription = await openai.createTranscription(request.body, 'whisper-1')

  return NextResponse.json({ res: transcription })
}

// export const config = {
//   api: {
//     bodyParser: false
//   }
// }
