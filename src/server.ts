import { fastify } from 'fastify'
import {
    type ZodTypeProvider,
    serializerCompiler, 
    validatorCompiler
} from 'fastify-type-provider-zod'

import {env} from './env.ts'

const app =  fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.get('/ping', () => {
    return 'pong'
})

app.listen({ port: env.PORT })