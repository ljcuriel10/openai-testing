require('dotenv').config();
const PORT = 8000;
const express = require('express')
const cors = require('cors')
const app = express()
const OpenAI = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPEN_AI_TOKEN });

app.use(express.json())
app.use(cors())


app.post('/completion', async (req, res) => {
    const text = req.body.text
    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { 
                role: "system", 
                content: "You are a helpful assistant." },
            {
                role: "user",
                content: text,
            },
        ],
      });
      
      res.send(completion.choices[0])
})

/// Add image generator

app.post('/image', async (req, res) => {
    const text = req.body.text
    const image = await openai.images.generate({
        model: 'dall-e-3',
        prompt: text,
    })

    console.log(image.data[0].url)
    res.send(image.data[0])
})


app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})