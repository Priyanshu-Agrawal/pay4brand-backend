const datatype = require('../../dataType')
module.exports = {
	parameters: [
		{ paramName: 'ProductCount', direction: 'input', reqKey: 'showProductCount', type: datatype.int },
		{ paramName: 'Status', direction: 'output', type: datatype.nVarChar(50) },
		{ paramName: 'Message', direction: 'output', type: datatype.nVarChar(255) }
	]
}