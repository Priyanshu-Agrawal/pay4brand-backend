const {sqlUtils} = require("../../Utilities");
const router = require('express').Router();

router.post('/', async(req, res)=>{
	try{
		Promise.all([
			sqlUtils.execProcWithBody(req.body, 'GetTopSellingProducts'),
			sqlUtils.execProcWithBody(req.body, 'GetNewArrivals'),
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

module.exports = router