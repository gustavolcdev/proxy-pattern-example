import ManageCustomersInterface from './../api/services/ManageCustomersInterface.ts'
import Customer from './../api/CustomerInterface.ts'

class ManageCustomers implements ManageCustomersInterface {
    
    public execute(): Array<Customer> {
        const customers: Customer[] = [
            {
                name:'Client Foo',
                gender:'M'
            },
            {
                name:'Client Bar',
                gender:'F'
            },
            {
               name:'Client foobarr',
               gender: 'M'
            }
        ];

        return customers

    }
}

export default ManageCustomers