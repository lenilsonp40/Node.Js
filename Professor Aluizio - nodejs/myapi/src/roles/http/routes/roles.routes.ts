import { RolesRepository } from '@roles/repositories/RolesRepository';
import { createRolesController } from '@roles/useCases/createRole';
import { Router } from 'express';

const rolesRouter = Router();
const rolesRepository = new RolesRepository();

rolesRouter.post('/', (request, response) => {
  return createRolesController.handle(request, response);
});

rolesRouter.get('/', (_request, response) => {
  const roles = rolesRepository.findAll();

  return response.json(roles);
});

export { rolesRouter };
