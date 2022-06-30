// const sql = require('mssql')

console.log("caindo no banco de dados")

const connStr = "Server=localhost,1433;Database=Luiz_Gabriel;User Id=sa; Password=user_gabi; trustServerCertificate=true;";
const sql = require("mssql");

sql.connect(connStr)
   .then(conn => console.log("conectou!"))
   .catch(err => console.log("erro! " + err));

// const sqlConfig = {
//     user: 'sa',
//     password: 'user_gabi',
//     database: 'Luiz_gabriel',
//     server: 'localhost',
//     port: 1433
// }

// async () => {
//     try {
//      // make sure that any items are correctly URL encoded in the connection string
//         await sql.connect(sqlConfig)
//         console.log("------- teste 1 -------", sql)

//         var result = sql.query`select * from carros`;

//         console.log("------- teste 2 -------", result)
//         console.log("------- teste 3 -------", sql)
//     } catch (err) {
//         console.log("Erro:", err)
//      // ... error checks
//     }
//    }

// async () => {
//     try {
//         await sql.connect('Server=localhost;Database=Luiz_Gabriel;User Id=sa;Password=user_gabi;Encrypt=true')
//         const result = await sql.query('select * from carros')
//         console.log("result db =>", result)
//     } catch (err) {
//         console.log("Erro:", err)
//         throw err;
//     }
// }

// const connection = sql.CreateConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME
// });

// connection.connect((error) => {
//     if(error) throw error;
//     console.log(`conectado ao banco de dados: ${process.env.DB_name}`)
// });

module.exports = sql;