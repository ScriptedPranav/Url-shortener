import express from 'express';
import cors from 'cors'
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import urlRoute from './routes/urlRoute'

dotenv.config()
const app = express();

const PORT = process.env.PORT || 8001

mongoose.connect(process.env.MONGO_URL ?? '').then(() => console.log("MongoDB connected")).catch(err => console.log(err))


//MIDDLEWARES
app.use(cors());
app.use(helmet());
app.use(morgan('common'));
app.use(express.json());

app.use('/api',urlRoute)

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
})