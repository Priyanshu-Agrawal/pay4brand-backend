const {SQL} = require("../../Utilities");
const router = require('express').Router();


function transformData(data) {
    const categories = {};
    
    data.forEach(category => {
        if (!categories[category.CategoryID]) {
            categories[category.CategoryID] = {
                id: category.CategoryID,
                name: category.CategoryName,
                subcategories: []
            };
        }
        if (category.SubCategoryID && category.SubCategoryName) {
            categories[category.CategoryID].subcategories.push({
                id: category.SubCategoryID,
                name: category.SubCategoryName
            });
        }
    });
    
    return Object.values(categories);
}
router.post('/', async(req, res)=>{
	try{
		Promise.all([
			SQL.execProcWithBody(req.body, 'GetTopSellingProducts'),
			SQL.execProcWithBody(req.body, 'GetNewArrivals'),
		]).then((results)=>{
			if(results[0]["output"]["Status"] === "Success" && results[1]["output"]["Status"] === "Success"){
				res.send({
					"TopSellingProducts": results[0]["recordsets"][0],
					"NewArrivals": results[1]["recordsets"][0],
				})
			}else{
				res.status(500).send({
					"TopSellingProducts": [],
					"NewArrivals": [],
				})
			}
		})
	}catch (e) {
		console.log("error was")
		console.log(e)
		res.status(500).send(e)
	}
})

router.get('/fetchCategories', async(req, res)=>{
	try{
		const result = await SQL.execProcWithBody(req.body, 'FetchCategoriesAndSubcategories')
		if(result["output"]["Status"] === "Success"){
			res.send(transformData(result["recordsets"][0]))
		}else{
			res.status(500).send([])
		}
	}catch (e) {
		console.log("error was")
		console.log(e)
		res.status(500).send(e)
	}
})

module.exports = router