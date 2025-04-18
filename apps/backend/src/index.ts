import express from 'express';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { router } from './routes/v1';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('api/v1', router);

app.listen(process.env.PORT || 3000, () => {
    console.log(`server is listening on port ${process.env.PORT}`);
})