// backend/index.js
import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';
import dotenv from 'dotenv';

// Cargamos variables de entorno fijas para seguridad
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Configuramos el cliente de Groq usando la librería oficial
const groq = new OpenAI({
    apiKey: process.env.GROQ_API_KEY || "MI_API", // Usará el archivo .env o este texto
    baseURL: "https://api.groq.com/openai/v1"
});

// Ruta segura a la que llamará tu página web
app.post('/api/chat', async (req, res) => {
    const { systemPrompt, userPrompt, temperature } = req.body;

    try {
        const response = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userPrompt }
            ],
            temperature: temperature || 0.7,
            presence_penalty: 1.5,
            frequency_penalty: 1.5
        });

        // Enviamos al frontend solo el contenido y los tokens consumidos
        res.json({
            content: response.choices[0].message.content,
            total_tokens: response.usage?.total_tokens || 0
        });

    } catch (error) {
        console.error("Error en Groq a través de Node.js:", error);
        res.status(500).json({ error: "Hubo un problema en el servidor seguro." });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Servidor seguro corriendo en http://localhost:${PORT}`));