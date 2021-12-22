import { Request, Response, NextFunction } from 'express';
import { employeeController } from './employee.controller';

module Employee {
    export function employeeRoute(api: any): void {
        api.get(
            '/v/1/employee',
            employeeController.getEmployee);

        api.post(
            '/v/1/insertEmployee',
            employeeController.createEmployee);

         api.post(
             '/v/1/updateEmployee/:id',
            employeeController.updateEmployee);

        api.post(
            '/v/1/deleteEmployee/:id',
            employeeController.deleteEmployee);
    }
}
export { Employee }