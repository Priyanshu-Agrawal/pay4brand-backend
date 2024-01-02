const sql = require("mssql");
/*
* @FirstName NVARCHAR(50),
    @LastName NVARCHAR(50),
    @Username NVARCHAR(50),
    @Email NVARCHAR(50),
    @Phone NVARCHAR(50),
    @Password NVARCHAR(50),
    @Status NVARCHAR(50) OUTPUT,
    @Message NVARCHAR(255) OUTPUT,
    @Data NVARCHAR(MAX) OUTPUT
* */

/*
*  data: {
    firstName: 'priyanshu',
    lastName: 'agrawal',
    username: 'myself',
    email: 'me@email.com',
    phone: '9999999999',
    password: '99999999999999'
  }

* */

module.exports = {
	parameters: [
		{ paramName: 'FirstName', direction: 'input', reqKey: 'firstName', type: sql.NVarChar(50) },
		{ paramName: 'LastName', direction: 'input', reqKey: 'lastName', type: sql.NVarChar(50) },
		{ paramName: 'Username', direction: 'input', reqKey: 'username', type: sql.NVarChar(50) },
		{ paramName: 'Email', direction: 'input', reqKey: 'email', type: sql.NVarChar(50) },
		{ paramName: 'Phone', direction: 'input', reqKey: 'phone', type: sql.NVarChar(50) },
		{ paramName: 'Password', direction: 'input', reqKey: 'password', type: sql.NVarChar(50) },
		{ paramName: 'Status', direction: 'output', type: sql.NVarChar(50) },
		{ paramName: 'Message', direction: 'output', type: sql.NVarChar(255) },
		{ paramName: 'Data', direction: 'output', type: sql.NVarChar(sql.MAX) }
	]
}