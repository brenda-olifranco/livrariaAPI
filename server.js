//import http from "http";
import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000


/* const server = http.createServer((req, res) =>{
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(rotas[req.url]); //Olha a URL que o visitante digitou (tipo /livros) e me dá o texto que tá nesse caminho lá no objeto rotas
}); */ //não precisamos mais disso pois quem vai criar é o APP

app.listen(PORT, () =>{
    console.log("Servidor escutando!")
});

