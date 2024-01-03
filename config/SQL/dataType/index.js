const msSQL = require("mssql");
module.exports  = {
	nVarChar: (length) => isNaN(length) ? (msSQL.NVarChar(msSQL.MAX)) : (msSQL.NVarChar(length)),
	int: msSQL.Int,
	uniqueIdentifier: msSQL.UniqueIdentifier,
	decimal: (precision, scale) => msSQL.Decimal(precision, scale),
};

