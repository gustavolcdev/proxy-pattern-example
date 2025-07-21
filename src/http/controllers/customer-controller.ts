import { injectable, inject } from 'tsyringe';
import ManageCustomersInterface from './../../api/services/ManageCustomersInterface.ts'
import Customer from '../../api/CustomerInterface.ts';

@injectable()
export class CustomerController {
    private managerCustomers: ManageCustomersInterface

    constructor (
        @inject('ManageCustomersProxy') manageCustomers: ManageCustomersInterface
    ) {
        this.managerCustomers = manageCustomers
    }
    /**
     * getList
     */
    public getList(): Array<Customer> {
        return this.managerCustomers.execute()
    }
}