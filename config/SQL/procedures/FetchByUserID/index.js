const datatype = require('../../dataType')

module.exports = {
	parameters: [
		{ paramName: 'UserID', direction: 'input', reqKey: 'userId', type: datatype.uniqueIdentifier },
		{ paramName: 'Status', direction: 'output', type: datatype.nVarChar(50) },
		{ paramName: 'Message', direction: 'output', type: datatype.nVarChar("MAX") },
	]
}