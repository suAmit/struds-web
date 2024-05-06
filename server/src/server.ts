import express, { Express, Request, Response } from 'express';
// import data from './data/notebook.js';
const cors = require("cors");

const app: Express = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/notes', (req: Request, res: Response) => {
  res.json({message: "Hello from"});
});

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
