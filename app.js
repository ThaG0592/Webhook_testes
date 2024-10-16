import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORTA || 3000; // Certifique-se de que isso seja apenas um número

app.use(bodyParser.json());

app.post('/api/webhook', (req, res) => {
    console.log('Webhook received:', req.body);
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}/api/webhook`);
});
