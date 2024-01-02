const express = require('express');
const router = express.Router();
const sqlUtils = require('../../../Utilities/sqlControls');

router.post('/', async (req, res)=>{
	try{
		const result = await sqlUtils.execProc(req.body, 'RegisterUser');
		if(result.output.Status === "Success"){
			res.status(200).send(result)
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