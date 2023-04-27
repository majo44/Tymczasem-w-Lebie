import * as url from 'url';
import * as path from 'path';

import fastify from "fastify";
import fStatic from '@fastify/static';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = fastify();

app.addHook('onRequest', async (request, reply) => {
    console.log(request.url);
    if (request.url.endsWith('.wbn')) {
        reply.type('application/webbundle');
        reply.header('X-Content-Type-Options', 'nosniff');
        reply.header('Cache-Control', 'max-age=2592000');
    } else if (request.url.endsWith('.js')) {
        reply.header('Cache-Control', 'max-age=2592000');
    }
})

app.register(fStatic, {
    root: path.join(__dirname, '')
})


await app.listen(8081);
