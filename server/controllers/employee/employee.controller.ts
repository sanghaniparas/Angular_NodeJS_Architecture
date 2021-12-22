import { Request, Response, NextFunction } from 'express';
import { employeeService } from './employee._service';

module employeeController {
    export async function getEmployee(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await employeeService.getEmployee();
            res.send(result);
            return result;
        }
        catch (err) {
            console.log(err);
            res.statusCode = 200;
            res.send("error in getEmployee: " + err);
            return err;
        };
    };

    export async function createEmployee(req: Request, res: Response, next: NextFunction) {
        try {
            res.locals = {};
            await employeeService.createEmployee(req.body);
            res.locals.message = "Employee added successfully!";
            res.json({ message: "Employee added successfully!" });
        }
        catch (err) {
            console.log(err);
            res.statusCode = 200;
            res.send("error in createEmployee: " + err);
            return err;
        };
    };

    export async function updateEmployee(req: Request, res: Response, next: NextFunction) {
        try {
            res.locals = {};
            await employeeService.updateEmployee(req.params.id, req.body);
            res.locals.message = "Employee updated successfully!";
            res.json({ message: "Employee updated successfully!" });
        }
        catch (err) {
            console.log(err);
            res.statusCode = 200;
            res.send("error in createEmployee: " + err);
            return err;
        };
    };

    export async function deleteEmployee(req: Request, res: Response, next: NextFunction) {
        try {
            res.locals = {};
            await employeeService.deleteEmployee(req.params.id);
            res.locals.message = "Employee deleted successfully!";
            res.json({ message: 'Employee deleted successfully!' });
        }
        catch (err) {
            console.log(err);
            res.statusCode = 200;
            res.send("error in createEmployee: " + err);
            return err;
        };
    };
}
export { employeeController }