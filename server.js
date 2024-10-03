require('dotenv').config();
const PORT = 8000;
const express = require('express')
const cors = require('cors')
const app = express()
const  OpenAI = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPEN_AI_KEY });

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
                content: `${text}`,
            },
        ],
      });
      
      res.send(completion.choices[0])
})

/// Add image generator




app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})