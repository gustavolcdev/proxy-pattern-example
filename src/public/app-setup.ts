import { fastify } from 'fastify'
import {
    type ZodTypeProvider,
    serializerCompiler, 
    validatorCompiler
} from 'fastify-type-provider-zod'
import { env } from './../env.ts'
import { routes } from './../http/routes/index.ts'

class AppSetup {
    
    private server?: Promise<string>
    public app
    
    constructor () {
        this.app = fastify()
    }

    public init() {
        this.setupFastify()
        this.setupRoutes()
    }

    private setupRoutes() {
        this.app.register(routes.ping)
        this.app.register(routes.getCustomerRoute)
    }

    private setupFastify() {
        this.app.withTypeProvider<ZodTypeProvider>()
        this.app.setSerializerCompiler(serializerCompiler)
        this.app.setValidatorCompiler(validatorCompiler)
    }

    public start() {
        this.server = this.app.listen({ port: env.PORT })
    }
}

export default new AppSetup()