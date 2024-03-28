// import express, { Express, Request, Response } from 'express';
import express,{Express} from 'express';
import BorderRoutes from './routes/borderRoutes';
import 'dotenv/config';
import errorHandler from './middleware/errorHandler';


const app: Express = express();
const port = process.env.PORT;

// app.get('/', (req: Request, res: Response) => {
//   res.send('Typescript + Node.js + Express Server');
// });

app.use(express.json());

app.use('/border',BorderRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`[server]: Server is running at <https://localhost>:${port}`);
});

// app.listen(port);

