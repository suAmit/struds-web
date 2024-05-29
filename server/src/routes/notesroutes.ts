import express, { Request, Response } from 'express';

export const appRouter = express.Router();

appRouter.get('/', async (req: Request, res: Response) => {
  try {
    res.status(200).send('Server is live');
  } catch (e) {
    res.status(500).send((e as Error).message);
  }
});
