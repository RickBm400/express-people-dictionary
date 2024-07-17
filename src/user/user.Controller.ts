import { Request, Response } from "express"

export const getUser = (req: Request, res: Response) => {
    try {
        res.json({ message: 'Holamundo' })
    } catch (error) {
        console.log(error);
    }
}