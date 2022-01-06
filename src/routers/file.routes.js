import express from 'express';
import FileController from '../controllers/file.controller';

const router = express.Router();

router.post('/upload', FileController.upload);

router.get('/:filename', FileController.download);

export default router;
