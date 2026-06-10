// backend/index.js
import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';
import dotenv from 'dotenv';

// Cargamos variables de entorno desde el archivo .env en local
dotenv.config();

const app = express();

// Habilitamos CORS para que Netlify pueda comunicarse con Render libremente
app.use(cors());
app.use(express.json());

// Configuramos el cliente de Groq usando la librería oficial de OpenAI adaptada
const groq = new OpenAI({
    apiKey: process.env.GROQ_API_KEY || "MI_API", 
    baseURL: "https://api.groq.com/openai/v1"
});

// Ruta segura a la que llamará tu página web (frontend)
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

        // Enviamos al frontend el texto generado y los tokens consumidos
        res.json({
            content: response.choices[0].message.content,
            total_tokens: response.usage?.total_tokens || 0
        });

    } catch (error) {
        console.error("Error en Groq a través de Node.js:", error);
        res.status(500).json({ error: "Hubo un problema en el servidor seguro." });
    }
});

// Configuración de Puerto Dinámica para Internet (Render) o Local (3000)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor seguro corriendo exitosamente en el puerto ${PORT}`));