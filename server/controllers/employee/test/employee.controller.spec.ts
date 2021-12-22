import { Request, Response, NextFunction } from 'express';
import { employeeController } from '../employee.controller';
import { employeeService } from '../employee._service';

const mockRequest: any = {
    body: jest.fn(),
    params: jest.fn()
};

const mockResponse: any = {
    json: jest.fn(),
    status: jest.fn(),
    send: jest.fn()
};

const mockNext: NextFunction = jest.fn();

describe("Employee Controller", () => {
    afterEach(() => {    
        jest.clearAllMocks();
      });
      
    it("When getEmployee funcation call with spyon resolve then it should be return success message", async () => {
        const spy = jest.spyOn(employeeService, 'getEmployee').mockResolvedValueOnce("Success");
        const comments = await employeeController.getEmployee(mockRequest, mockResponse, mockNext);
        expect(comments).toEqual("Success");
        expect(spy).toHaveBeenCalledTimes(1)
    });

    it("When getEmployee funcation call with spyon rejects then it should be return error message", async () => {
        const spy = jest.spyOn(employeeService, 'getEmployee').mockRejectedValue("Failed");
        let data = await employeeController.getEmployee(mockRequest, mockResponse, mockNext)
        expect(data).toEqual("Failed");
        expect(spy).toHaveBeenCalledTimes(1)
    });
    it("When createEmployee funcation call with spyon resolve then it should be return success message", async () => {
        const spy = jest.spyOn(employeeService, 'createEmployee').mockResolvedValueOnce("Success");
        await employeeController.createEmployee(mockRequest, mockResponse, mockNext);
        expect(mockResponse.locals.message).toEqual("Employee added successfully!");
        expect(spy).toHaveBeenCalledTimes(1)
    });

    it("When createEmployee funcation call with spyon rejects then it should be return error message", async () => {
        const spy = jest.spyOn(employeeService, 'createEmployee').mockRejectedValue("Failed");
        let data = await employeeController.createEmployee(mockRequest, mockResponse, mockNext)
        expect(data).toEqual("Failed");
        expect(spy).toHaveBeenCalledTimes(1)
    });
    it("When updateEmployee funcation call with spyon resolve then it should be return success message", async () => {
        const spy = jest.spyOn(employeeService, 'updateEmployee').mockResolvedValueOnce("Success");
        await employeeController.updateEmployee(mockRequest, mockResponse, mockNext);
        expect(mockResponse.locals.message).toEqual("Employee updated successfully!");
        expect(spy).toHaveBeenCalledTimes(1)
    });

    it("When updateEmployee funcation call with spyon rejects then it should be return error message", async () => {
        const spy = jest.spyOn(employeeService, 'updateEmployee').mockRejectedValue("Failed");
        let data = await employeeController.updateEmployee(mockRequest, mockResponse, mockNext)
        expect(data).toEqual("Failed");
        expect(spy).toHaveBeenCalledTimes(1)
    });
    it("When deleteEmployee funcation call with spyon resolve then it should be return success message", async () => {
        const spy = jest.spyOn(employeeService, 'deleteEmployee').mockResolvedValueOnce("Success");
        await employeeController.deleteEmployee(mockRequest, mockResponse, mockNext);
        expect(mockResponse.locals.message).toEqual("Employee deleted successfully!");
        expect(spy).toHaveBeenCalledTimes(1)
    });

    it("When deleteEmployee funcation call with spyon rejects then it should be return error message", async () => {
        const spy = jest.spyOn(employeeService, 'deleteEmployee').mockRejectedValue("Failed");
        let data = await employeeController.deleteEmployee(mockRequest, mockResponse, mockNext)
        expect(data).toEqual("Failed");
        expect(spy).toHaveBeenCalledTimes(1)
    });
});