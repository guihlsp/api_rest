import express from "express"
import db from "./config/database.js";
// import livros from "./models/Livro.js"
import routes from "./routes/index.js"


db.on("error", console.log.bind(console, 'Erro de conexão:'));
db.once("open", () => {
    console.log('Conexão com o banco realizada!')
})


const app = express();

routes(app);


// app.get('/livros/:id', (req, res) => {
//     livros.buscaLivro((err, livros) => {
//         res.json(livros[livro]);
//     });
// })
// app.post('/livros', (req, res) => {
//     livros.push(req.body);
//     res.status(201).send('Livro cadastrado com sucesso')
// })
// app.put('/livros/:id', (req, res) => {
//     let index = buscaLivro(req.params.id);
//     livros[index].titulo = req.body.titulo;
//     res.json(livros);
// })
// app.delete('/livros/:id', (req, res) => {
//     let {id} = req.params
//     let index = buscaLivro(id);
//     livros.splice(index, 1);
//     res.send(`Livro removido com sucesso!`);
// })

// function buscaLivro(id){
//     return livros.findIndex(id)
// }

export default app