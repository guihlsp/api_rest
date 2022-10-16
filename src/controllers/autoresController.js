import autores from "../models/Autor.js";

class AutorController {

    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            if(err){
                res.status(400).send({message: err.message})
            }else{
                res.status(200).json(autores)
            }    
        })
    }

    static visualizarAutor = (req, res) => {
        const id = req.params.id;

        autores.findById(id, (err, autores) =>{
            if(err){
                res.status(400).send({message: err.message})
            }else{
                res.status(200).send(autores.toJSON())
            }
        })
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);

        autor.save((err) => {
            
            if(err){
                res.status(500).send({message: `${err.message} - Falha ao cadastrar Autor`})
            }else{
                res.status(201).send(autor.toJSON())
            }
        })
    }
    
    static atualizarAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(201).send({message: 'Autor atualizado com sucesso'})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }

    static excluirAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(201).send({message: 'Autor excluído com sucesso'})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }

}

export default AutorController