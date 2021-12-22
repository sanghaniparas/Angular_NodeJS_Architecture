import { Employee } from '../../server/controllers/employee';

export function apiRoutes(server: any) {
    Employee.employeeRoute(server);
}