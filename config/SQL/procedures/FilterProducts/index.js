const datatype = require('../../dataType')
module.exports = {
	parameters: [
		{ paramName: 'Categories', direction: 'input', reqKey: 'Categories', type: datatype.nVarChar("MAX") },
		{ paramName: 'Brands', direction: 'input', reqKey: 'Brands', type: datatype.nVarChar("MAX") },
		{ paramName: 'Discounts', direction: 'input', reqKey: 'Discount', type: datatype.nVarChar("MAX") },
		{ paramName: 'Prices', direction: 'input', reqKey: 'Price', type: datatype.nVarChar("MAX") },
		{ paramName: 'Search', direction: 'input', reqKey: 'search', type: datatype.nVarChar(255) },
		{ paramName: 'Status', direction: 'output', type: datatype.nVarChar(50) },
		{ paramName: 'Message', direction: 'output', type: datatype.nVarChar("MAX") }
	]
}