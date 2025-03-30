import cors from 'cors';
import express from "express";
import authRoutes from './routes/auth.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);

app.listen(PORT, () => console.log(`${PORT} 포트에서 서버 작동중!!`));

