import express, { request, response } from 'express'
import { CreateCourse } from './routes';

const app = express();

app.get("/", CreateCourse);

app.listen(3333);