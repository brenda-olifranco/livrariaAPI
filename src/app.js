import express from "express";
import conectaNaDataBase from "./config/dbConnect.js";
import livro from "./models/Livro.js";

const conexao = await conectaNaDataBase();

const app = express();
app.use(express.json()) //middleware

conexao.on("error", (erro) =>{
    console.error("erro de conexão", erro)
}); //lista de erros possíveis que vem lá do mongoose

conexao.once("open",()=>{
    console.log("Conexão com o banco feita com sucesso")
})

//Um middleware é uma função que roda no meio do caminho entre a requisição do cliente e a resposta do servidor. Toda vez que chega um dado como body ele chega como string, por isso temos que converter para json pelo middleware


app.get("/", (req, res)=>{
    res.status(200).send("Curso de Node.js");
});

app.get("/livros", async (req, res)=>{
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
});

app.get("/testando",(req, res)=>{
    res.status(200).send("Testando")
})

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index])
})

app.post("/livros",(req, res)=>{
    livros.push(req.body); //o express cria o objeto req e dentro dele está a corpo da requisição
    res.status(201).send("Livro cadastrado com sucesso")
})

app.put("/livros/:id",(req, res) =>{
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo; 
    res.status(200).json(livros)
});

app.delete("/livros/:id",(req, res)=>{
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso!");
})

export default app;

