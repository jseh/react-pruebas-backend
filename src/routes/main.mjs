import { indexController } from '../controllers/main.controller.mjs';
// import {mongoController} from '../controllers/mongo.controller.mjs';
import mongoController from '../controllers/mongo.controller.mjs';

import express from 'express';

const router = express.Router();


router.get('/inicio', indexController.index);
router.get('/consulta', mongoController.consulta);
router.get('/nuevo', mongoController.agregarNuevo);

export { router };

