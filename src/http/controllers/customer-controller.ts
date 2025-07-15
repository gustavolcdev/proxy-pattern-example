import { injectable, inject } from 'tsyringe';
import ManageCustomersInterface from './../../api/services/ManageCustomersInterface.ts'

@injectable()
export class CustomerController {
    private managerCustomers: ManageCustomersInterface

    constructor (
        @inject('ManageCustomers') manageCustomers: ManageCustomersInterface
    ) {
        this.managerCustomers = manageCustomers
    }
    /**
     * getList
     */
    public getList() {
        return this.managerCustomers.execute()
    }
}