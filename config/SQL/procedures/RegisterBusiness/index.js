const datatype = require('../../dataType')

module.exports = {
	parameters: [
		{ paramName: 'UserID', direction: 'input', reqKey: 'userId', type: datatype.uniqueIdentifier },
		{ paramName: 'BusinessName', direction: 'input', reqKey: 'businessName', type: datatype.nVarChar(255) },
		{ paramName: 'BusinessAddress', direction: 'input', reqKey: 'businessAddress', type: datatype.nVarChar(255) },
		{ paramName: 'GSTNumber', direction: 'input', reqKey: 'gstNumber', type: datatype.nVarChar(255) },
		{ paramName: 'Status', direction: 'output', type: datatype.nVarChar(50) },
		{ paramName: 'Message', direction: 'output', type: datatype.nVarChar(255) },
	]
}