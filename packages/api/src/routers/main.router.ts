import { FastifyPluginAsync } from 'fastify';

const main_router: FastifyPluginAsync = async (app) => {
	app.get('/', async () => ({ hello: 'world' }));
};

export default main_router;