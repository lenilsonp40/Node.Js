import { AppError } from '@shared/errors/AppErrors';
import { Router } from 'express';

const routes = Router();

routes.get('/', (error, request, response, next) => {
  throw new AppError({ message: 'Acesso negado!' });
  return response.json({ message: 'Olá Dev!' });
});

export { routes };
