import express, { Express } from 'express';
import cors from 'cors';
import { appRouter } from './routes/notesroutes';

const app: Express = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/note', appRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
