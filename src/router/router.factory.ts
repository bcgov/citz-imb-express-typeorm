import express from 'express';
import { Controller } from '@/controller';

export const createRouter = <TEntity>(dataController: Controller<TEntity>) => {
  const router = express.Router();

  router.get('/', dataController.getAllItems);
  router.get('/:id', dataController.getItemById);
  router.post('/', dataController.createItem);
  router.put('/:id', dataController.updateItemById);
  router.delete('/:id', dataController.deleteItemById);

  return router;
};
