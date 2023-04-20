import { Router } from 'express';
import { rolesRouter } from '@roles/http/routes/roles.routes';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json('Olá Dev!');
});

routes.use('/roles', rolesRouter);

export { routes };
