import { createRolesController } from '@roles/useCases/createRole';
import { listRolesController } from '@roles/useCases/listRoles';
import { Router } from 'express';

const rolesRouter = Router();


rolesRouter.post('/', (request, response) => {
  return createRolesController.handle(request, response);
});

rolesRouter.get('/', (_request, response) => {
  return listRolesController.handle(_request, response);
});

export { rolesRouter };
