import express from 'express';
import startServer from './libs/boot.js';
import injectRoutes from './routes/routes.js';
import injectMiddlewares from './libs/middlewares.js'; // Add .js extension here

const server = express();

injectMiddlewares(server);
injectRoutes(server);
startServer(server);

export default server;
