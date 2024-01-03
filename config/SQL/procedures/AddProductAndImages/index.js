const datatype = require('../../dataType')

module.exports = {
	parameters: [
		{ paramName: 'UserID', direction: 'input', reqKey: 'userId', type: datatype.uniqueIdentifier },
		{ paramName: 'ProductName', direction: 'input', reqKey: 'productName', type: datatype.nVarChar(255) },
		{ paramName: 'ProductDescription', direction: 'input', reqKey: 'productDescription', type: datatype.nVarChar("MAX") },
		{ paramName: 'Price', direction: 'input', reqKey: 'price', type: datatype.decimal(10, 2) },
		{ paramName: 'Discount', direction: 'input', reqKey: 'discount', type: datatype.decimal(5, 2) },
		{ paramName: 'SubCategoryID', direction: 'input', reqKey: 'subCategoryId', type: datatype.int },
		{ paramName: 'StockQuantity', direction: 'input', reqKey: 'stockQuantity', type: datatype.int },
		{ paramName: 'BrandName', direction: 'input', reqKey: 'brandName', type: datatype.nVarChar(255) },
		{ paramName: 'ImageURLs', direction: 'input', reqKey: 'imageUrls', type: datatype.nVarChar("MAX") },
		{ paramName: 'Status', direction: 'output', type: datatype.nVarChar(50) },
		{ paramName: 'Message', direction: 'output', type: datatype.nVarChar("MAX") },
	]
}