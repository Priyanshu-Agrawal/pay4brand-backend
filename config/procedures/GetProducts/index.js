const sql = require("mssql");
module.exports = {
	parameters: [
		{ paramName: 'ProductCount', direction: 'input', reqKey: 'showProductCount', type: sql.Int },
		{ paramName: 'Status', direction: 'output', type: sql.NVarChar(50) },
		{ paramName: 'Message', direction: 'output', type: sql.NVarChar(255) }
	]
}