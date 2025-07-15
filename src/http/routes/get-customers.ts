import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod'
import { CustomerController } from './../controllers/customer-controller.ts'
import { container } from "tsyringe";

export const getCustomerRoute: FastifyPluginCallbackZod = (app) => {
    app.get('/customers', async () => {
        const controller = container.resolve(CustomerController)

        return controller.getList()
    })
}