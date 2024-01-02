const sql = require("mssql");
module.exports = {
	parameters: [
		{ paramName: 'Email', direction: 'input', reqKey: 'email', type: sql.NVarChar(50) },
		{ paramName: 'Username', direction: 'input', reqKey: 'username', type: sql.NVarChar(50) },
		{ paramName: 'Password', direction: 'input', reqKey: 'password', type: sql.NVarChar(50) },
		{ paramName: 'Status', direction: 'output', type: sql.NVarChar(50) },
		{ paramName: 'Message', direction: 'output', type: sql.NVarChar(255) },
		{ paramName: 'Data', direction: 'output', type: sql.NVarChar(sql.MAX) }
	]
}