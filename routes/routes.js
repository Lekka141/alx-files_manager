import express from 'express';
import UserController from '../controllers/UsersController.js';
import FileController from '../controllers/FilesController.js';

/* Initialize router */
const router = express.Router();

/* Routes */

// User routes
/* User registration route */
router.post('/users', UserController.createUser);
/* User login route */
router.get('/connect', UserController.login);
/* User logout route */
router.get('/disconnect', UserController.logout);
/* Get user information route */
router.get('/users/me', UserController.getUser);

// File routes
/* File upload route */
router.post('/files', FileController.uploadFile);
/* Get file by ID route */
router.get('/files/:id', FileController.getFile);
/* List all files for the user */
router.get('/files', FileController.listFiles);
/* Delete file by ID route */
router.delete('/files/:id', FileController.deleteFile);

/* Export router */
export default router;
