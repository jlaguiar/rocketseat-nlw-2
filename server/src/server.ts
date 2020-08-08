import express from 'express';
import routes from './router';
import cors from 'cors';

//Quando der erro pq nao foi feito em typescript precisa baixar ex: @type/express
const PORT = 3333
const app = express();

app.use(cors())
app.use(express.json()); 
app.use(routes);

app.listen(PORT);