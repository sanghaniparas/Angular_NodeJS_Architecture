import { getConnection } from '../../../databaseConfig/dbConfig'

module employeeService {
    export async function getEmployee() {
        try {
            const query = "SELECT * FROM Employee";
            const pool: any = await getConnection();
            let data = await pool.query(query);
            return data.recordset;
        } catch (err) {
            return err;
        }
    };

    export async function createEmployee(body: any) {
        try {
            const query = "INSERT INTO Employee VALUES ('" + body.name + "' )";
            const pool: any = await getConnection();
            let data = await pool.query(query);
            return data.recordset;
        } catch (err) {
            return err;
        }
    };

    export async function updateEmployee(id: any, body: any) {
        try {
            const query = "UPDATE Employee SET name = '" + body.name + "' WHERE id = '" + id + "' ";
            const pool: any = await getConnection();
            let data = await pool.query(query);
            return data.recordset;
        } catch (err) {
            return err;
        }
    };

    export async function deleteEmployee(id: any) {
        try {
            const query = "DELETE FROM Employee WHERE id = '" + id + "' ";
            const pool: any = await getConnection();
            let data = await pool.query(query);
            return data.recordset;
        } catch (err) {
            return err;
        }
    };
};
export { employeeService }