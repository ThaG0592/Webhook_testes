import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

// Middleware para o body parser
app.use(bodyParser.json());

// Rota para receber webhooks
app.post('/api/webhook', (req, res) => {
    console.log('Webhook received:', req.body);
    res.sendStatus(200);
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}/api/webhook`);
});
