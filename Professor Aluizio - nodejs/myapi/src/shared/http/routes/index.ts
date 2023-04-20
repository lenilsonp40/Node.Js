import { AppError } from '@shared/errors/AppErrors';
import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  throw new AppError('Aceso negado');
  return response.json('Olá Dev!');
});

export { routes };
