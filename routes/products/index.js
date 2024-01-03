const {SQL} = require("../../Utilities");
const router = require('express').Router();
// const _ = require('lodash');

function transformData(data) {
	const productMap = {};
	
	data.forEach(item => {
		if (!productMap[item.ProductID]) {
			productMap[item.ProductID] = { ...item, imgURLs: [] };
			delete productMap[item.ProductID].ImageURL;
			delete productMap[item.ProductID].ImageOrder;
		}
		
		productMap[item.ProductID].imgURLs.push({ url: item.ImageURL, order: item.ImageOrder });
	});
	
	return Object.values(productMap);
}
// function transformData(data) {
// 	const grouped = _.groupBy(data.recordset, 'ProductID');
//
// 	return _.map(grouped, (items, key) => {
// 		const product = _.omit(_.first(items), ['ImageURL', 'ImageOrder']);
// 		product.imgURLs = _.map(items, item => ({ url: item.ImageURL, order: item.ImageOrder }));
// 		return product;
// 	});
// }


router.get('/:id', async (req, res) => {
	try{
		const result = await SQL.execProcWithBody({"productId" : req.params.id}, 'FetchProductDetails');
		const transformedData = transformData(result.recordset);
		if(result.output.Status === "Success"){
			res.status(200).send(transformedData[0])
		}else{
			res.status(409).send(result)
		}
	}catch (e) {
		console.log("error was")
		console.log(e)
		res.status(500).send(e)
	}
})

module.exports = router