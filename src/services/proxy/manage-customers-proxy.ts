import ManageCustomersInterface from '../../api/services/ManageCustomersInterface.ts'
import { injectable, inject } from 'tsyringe';
import Customer from "./../../api/CustomerInterface.ts";

@injectable()
class ManageCustomersProxy implements ManageCustomersInterface {
    
    private managerCustomers: ManageCustomersInterface

    constructor (
        @inject('ManageCustomers') manageCustomers: ManageCustomersInterface
    ) {
        this.managerCustomers = manageCustomers
    }
       
    public execute(): Array<Customer> {
        // Do you custom bussines rules
        const customers: Customer[] = this.managerCustomers.execute().map(customer => {
            if (customer.gender === "M") {
                return {
                    name: `Sr. ${customer.name}`,
                    gender: "Male"
                }
            } else {
                return {
                    name: `Sr(a). ${customer.name}`,
                    gender: "Female"
                }
            }

        });

        return customers;
    }
}

export default ManageCustomersProxy