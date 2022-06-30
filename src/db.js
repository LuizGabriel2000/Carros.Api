// const sql = require('mssql')

console.log("caindo no banco de dados")

const connStr = "Server=localhost,1433;Database=Luiz_Gabriel;User Id=sa; Password=user_gabi; trustServerCertificate=true;";
const sql = require("mssql");

sql.connect(connStr)
   .then(conn => console.log("conectou!"))
   .catch(err => console.log("erro! " + err));


module.exports = sql;