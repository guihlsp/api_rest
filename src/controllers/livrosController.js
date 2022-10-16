import livros from '../models/Livro.js';


class LivroController {

    static listarLivros = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros)
        })
    }

    static visualizarLivro = (req, res) => {
        const id = req.params.id;

        livros.findById(id, (err, livros) =>{
            if(err){
                res.status(400).send({message: err.message})
            }else{
                res.status(200).send(livros.toJSON())
            }
        })
    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);

        livro.save((err) => {
            
            if(err){
                res.status(500).send({message: `${err.message} - Falha ao cadastrar livro`})
            }else{
                res.status(201).send(livro.toJSON())
            }
        })
    }
    
    static atualizarLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(201).send({message: 'Livro atualizado com sucesso'})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }

    static excluirLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(201).send({message: 'Livro excluído com sucesso'})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }

}

export default LivroController