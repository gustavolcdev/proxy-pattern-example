import { container } from 'tsyringe';

import ManageCustomersInterface from './../../api/services/ManageCustomersInterface.ts';
import ManageCustomers from './../../services/manage-customers.ts';

container.registerSingleton<ManageCustomersInterface>('ManageCustomers', ManageCustomers)