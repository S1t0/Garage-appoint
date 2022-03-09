import { FastifyPluginAsync } from 'fastify';
import blipp from 'fastify-blipp';
import fastifyCors from 'fastify-cors';
import conectDB from './db';
import main_router from './routers/main.router';

const main_app: FastifyPluginAsync = async (app) => {
	await app.register(blipp);
	await app.register(fastifyCors);

	// Do not await this plugin, it  cause whole app to wait
	// for db connection, mongoose already does that in the background.
	conectDB();

	app.register(main_router);

	// when app starts, blip the installed routes on terminal
	app.blipp();
};

export default main_app;