import Customer from "../CustomerInterface.ts";

export default interface ManageCustomers {
    execute(): Array<Customer>
}