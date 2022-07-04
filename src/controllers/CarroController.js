const CarroService = require('../services/CarroService')

module.exports = {
    BuscarTodos: async (req, res) =>{
        let json = {error:'', result:[]}

        let carros = await CarroService.buscarTodos()

        for(let i in carros) {
            console.log("O que éssa porra de i =>", i)
            json.result.push({
                codigo: carros[i].codigo,
                descricao: carros[i].modelo,
                placa: carros[i].placa,
                marca: carros[i].marca,
                cor: carros[i].cor
            });
                
        }

        res.json(json); 
    },

    buscarUm: async(req, res) => {
        let json = {error:'', result:{}};

        let codigo = req.params.codigo;
        let carro = await CarroService.buscarUm(codigo);
        
        if(carro) {
            json.result = carro;
        }

        res.json(json);
    },

    
    inserir: async(req, res) => {
        let json = {error:'', result:{}};

        console.log("REQ:", req.body)

        let modelo = req.body.modelo;
        let placa = req.body.placa;
        let marca = req.body.marca;
        let cor = req.body.cor;
        
        if(modelo && placa) {
            let carroCodigo = await CarroService.inserir(modelo, placa);
            json.result = {
                codigo: carroCodigo,
                modelo,
                placa,
                marca,
                cor
            };
                
        } else {
                json.error = 'campos não enviados!';
        }

        res.json(json);
    },

    alterar: async(req, res) => {
        let json = {error:'', result:{}};

        console.log("REQ:", req.body)
        let codigo = req.params.codigo;
        let modelo = req.body.modelo;
        let placa = req.body.placa;
        let marca = req.body.marca;
        let cor = req.body.cor;

        if (marca.length > 20) {
            json.error = "Campo contem mais de 20 caracteris"
        } else {
            if(codigo && modelo && placa) {
                await CarroService.alterar(codigo, marca, modelo, cor, placa);
                json.result = {
                    codigo,
                    modelo,
                    placa,
                    marca,
                    cor
                };
                    
            } else {
                    json.error = 'campos não enviados!';
            }
        }
        
        res.json(json);
    },

    excluir: async(req, res) => {
        let json = {error:'', result:{}};

        await CarroService.excluir(req.params.codigo);

        res.json(json);

    }

    

}
