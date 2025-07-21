import { container } from 'tsyringe';

import ManageCustomersInterface from './../../api/services/ManageCustomersInterface.ts';
import ManageCustomers from './../../services/manage-customers.ts';
import ManageCustomersProxy from '../../services/proxy/manage-customers-proxy.ts';

container.registerSingleton<ManageCustomersInterface>('ManageCustomers', ManageCustomers)
container.registerSingleton<ManageCustomersInterface>('ManageCustomersProxy', ManageCustomersProxy)