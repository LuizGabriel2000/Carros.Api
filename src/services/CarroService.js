// Todas as regras do Banco de Dados estarão Aqui:

const db = require('../db')


module.exports = {
    buscarTodos: () =>{
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM carros', (error, results)=>{
                console.log("------- teste -------", error, results)
                if(error) {rejeitado(error); return; }
                aceito(results.recordset);
            })
        })
    },

    buscarUm: (codigo) => {
        return new Promise((aceito, rejeitado) => {

            
            db.query(`SELECT * FROM carros WHERE codigo = ${codigo}`, (error, results) => {
                if(error) { rejeitado(error); return; }
                if(results.recordset.length > 0){
                    aceito(results.recordset[0]);
                }else{
                    aceito(false);
                }
            })
        })
    },

    inserir: (modelo, placa) => {
        return new Promise((aceito, rejeitado) => {
            db.query('select * from carros', (err, res) => {
                let count = (res.recordset.length + 1)
                console.log("result count", count)
                db.query(`INSERT INTO carros (codigo, modelo, Placa) VALUES (${count}, '${modelo}', '${placa}')`, (error, results) => {
                    console.log("result ==-=>", results)
                    if(error) { rejeitado(error); return; }
    
                    aceito(results.inserirCodigo);
                })
            }) 
            
        })
    }
};