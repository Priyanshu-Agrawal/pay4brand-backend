
const {SQL, jwtUtils} = require("../../../Utilities");
const router = require('express').Router();

router.post('/', async(req, res)=>{
	try{
		const result = await SQL.execProcWithBody(req.body, 'AuthenticateUser');
		if(result["output"]["Status"] === "Success"){
			res.send({...result , token: jwtUtils.signToken(result["output"]["Data"])})
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