import ManageCustomersInterface from './../api/services/ManageCustomersInterface.ts'

class ManageCustomers implements ManageCustomersInterface {
    
    public execute(): Array<object> {
        return [
            {
                'foo':'bar'
            },
            {
                'bar':'foo'
            },
            {
               'foobar':'barfooddddd'
            }
        ]

    }
}

export default ManageCustomers