import { FastifyPluginAsync } from 'fastify';
import blipp from 'fastify-blipp';
import fastifyCors from 'fastify-cors';
import conectDB from './db';
import main_router from './routers/main.router';

const main_app: FastifyPluginAsync = async (app) => {
	await app.register(blipp);
	await app.register(fastifyCors);

	conectDB();

	app.register(main_router);

	
	app.blipp();
};

export default main_app;