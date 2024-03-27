import express, { Express, Request, Response } from 'express';
import 'dotenv/config'
import fbDB from './connectors/fbDB';

const app: Express = express();
const port = process.env.PORT;



app.get('/', (req: Request, res: Response) => {
  res.send('Typescript + Node.js + Express Server');
});

// app.listen(port, () => {
//   console.log(`[server]: Server is running at <https://localhost>:${port}`);
// });

app.listen(port);

