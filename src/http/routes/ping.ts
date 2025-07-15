import type { FastifyPluginCallbackZod} from 'fastify-type-provider-zod'

export const ping: FastifyPluginCallbackZod = (app) => {
    app.get('/ping', async () => {
        return 'pong'
    })
}