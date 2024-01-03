const datatype = require('../../dataType')

module.exports = {
	parameters: [
		{ paramName: 'Status', direction: 'output', type: datatype.nVarChar(50) },
		{ paramName: 'Message', direction: 'output', type: datatype.nVarChar("MAX") },
	]
}