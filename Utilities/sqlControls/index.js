const sql = require('mssql');
const config = require('../../config/sqlConnection');

let pool;

const getPool = async () => {
  if (!pool) {
    pool = await sql.connect(config);
  }
  return pool;
};

const runQuery = async (query) => {
  try {
    const pool = await getPool();
    const result = await pool.request().query(query);
    return result.recordset ?? result;
  } catch (err) {
    console.error('Error:', err);
    return errorsExtractor(err);
  }
};


const QueryBuilder = {
	insertDataQuery: async (tableName, data) => {
		const tableColumns = Object.keys(data).join(', ')
		const columnValues = Object.values(data).map(value => `'${value}'`).join(', ')
		return `INSERT INTO ${tableName} (${tableColumns}) VALUES (${columnValues})`
	},
	
	
	updateDataQuery: async (tableName, data) => {
		const keyColumnName = Object.keys(data)[0]
		const keyColumnValue = data[keyColumnName]
		const tableColumns = Object.keys(data).slice(1).map(column => `${column} = '${data[column]}'`).join(', ')
		// const query = `UPDATE ${tableName} SET  WHERE ${keyColumnName} = ${keyColumnValue}`;
		return `UPDATE ${tableName} SET ${tableColumns} WHERE ${keyColumnName} = ${keyColumnValue}`
	},
	
	deleteDataQuery: async (tableName, data) => {
		const columnName = Object.keys(data)[0]
		const columnValue = data[columnName]
		return `DELETE FROM ${tableName} WHERE ${columnName} = ${columnValue}`
	}
}

const execProcWithBody = async (requestBody, procName) => {
	try{
		const pool = await getPool();
		const request = pool.request();
		const procedure = require('../../config/procedures')[procName];
		procedure.parameters.map(({direction, paramName, type, reqKey})=>{
			if(direction === 'input'){
				request.input(paramName, type , requestBody[reqKey]);
			}else if (direction === 'output'){
				request.output(paramName, type);
			}
		})
		const result = await request.execute(procName);
		console.log(result)
		return result;
	} catch (err){
		console.error('Error:', err);
		return errorsExtractor(err);
	}
}

const runProcedure = async (procedureName, params) => {
	// console.log('Running procedure')
	try {
		const pool = await getPool();
		
		// Build the parameter string for the stored procedure
		const paramPlaceholders = params.map((_, index) => `@param${index}`).join(', ')
		
		// Build the SQL query
		const query = `EXEC ${procedureName} ${paramPlaceholders}`
		
		console.log("Procedure query:", query)
		
		const request = pool.request()
		params.forEach((param, index) => {
			request.input(`param${index}`, param)
		});
		
		
		const result = await request.query(query)
		//   console.log("Procedure result:", result.recordset)
		return result.recordset ?? result
	} catch (err) {
		console.error('Error:', err)
		return errorsExtractor(err)
	}
}


const errorsExtractor = async (errorObject) =>{
	// const errorMessages = [errorObject.message, ...errorObject.precedingErrors.map(error => error.message)]
	return errorObject;
}

module.exports = {
	runQuery, QueryBuilder, runProcedure, execProcWithBody
};
