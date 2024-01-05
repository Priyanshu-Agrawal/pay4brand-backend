const router = require('express').Router();

router.get('/:id', async (req, res) => {
    try{
        const result = await SQL.execProcWithBody({userId: req.params.id}, 'GetUserInfo');
        if(result.output?.Status === "Success"){
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