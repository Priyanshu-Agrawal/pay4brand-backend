const datatype = require('../../dataType')
module.exports = {
	parameters: [
		{ paramName: 'Email', direction: 'input', reqKey: 'email', type: datatype.nVarChar(50)},
		{ paramName: 'Username', direction: 'input', reqKey: 'username', type: datatype.nVarChar(50) },
		{ paramName: 'Password', direction: 'input', reqKey: 'password', type: datatype.nVarChar(50) },
		{ paramName: 'Status', direction: 'output', type: datatype.nVarChar(50) },
		{ paramName: 'Message', direction: 'output', type: datatype.nVarChar(255) },
		{ paramName: 'Data', direction: 'output', type: datatype.nVarChar("MAX") }
	]
}