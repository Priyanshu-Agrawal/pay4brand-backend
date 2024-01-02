const jwt = require('jsonwebtoken')
require('dotenv').config()
const signToken= (payLoad, option = {} ,callbackFn = ()=>{} ) => {
	return jwt.sign(payLoad, process.env.JWT_SECRET,option,  callbackFn())
}

module.exports = {
	signToken
}
