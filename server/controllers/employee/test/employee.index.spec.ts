import { Employee } from '../index';

describe("Employee Index", () => {
    const mockAPI = {
        get: jest.fn(),
        post: jest.fn()
    }
    it("Get API methods", async () => {
        await Employee.employeeRoute(mockAPI);
        expect(mockAPI.get).toHaveBeenCalledTimes(1);
        expect(mockAPI.get).toHaveBeenCalledWith('/v/1/employee', expect.anything());
        expect(mockAPI.post).toHaveBeenCalledTimes(3);
        expect(mockAPI.post).toHaveBeenCalledWith('/v/1/insertEmployee', expect.anything());
        expect(mockAPI.post).toHaveBeenCalledWith('/v/1/updateEmployee/:id', expect.anything());
        expect(mockAPI.post).toHaveBeenCalledWith('/v/1/deleteEmployee/:id', expect.anything());    
    });
});