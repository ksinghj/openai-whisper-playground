This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## What is this?

Simple proof of concept for an AI based app I plan to build. It's purpose was to test the Whisper API for myself, specifically the latency/response time.

From here I'll be using the text response from OpenAI Whisper-1 and sending it to GPT.

The OpenAI node sdk (left in deps) wasn't working nicely with the way I wanted to send the audio files so after hours of debugging (with the help of [@sebastianvirlan](https://github.com/sebastianvirlan) 🙏) I defaulted to using the REST API.
