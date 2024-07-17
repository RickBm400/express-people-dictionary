import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import mongoose, { mongo } from 'mongoose';
import router from "./routes"
dotenv.config();
const app: Express = express();
const mongoURL: string = process.env.DB_CONNECTION ? process.env.DB_CONNECTION : '';

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/', router);

(async () => {
    try {
        if (mongoose.connection.readyState !== 1) {
            await mongoose.connect(mongoURL);
        }
        console.log('Connected to mongodb');
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
})();

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

app.listen(process.env.PORT, () => {
    console.log(`Listen app on port ${process.env.PORT}`)
})