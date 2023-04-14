import express, { Request, Response, request } from "express";
import { Produto } from "./entidades/produto.model";

//Criando um servidor web através do express
const app = express();

let produto : Produto = new Produto();
produto.nome = request.body.nome;
produto.nome = request.body.preco;
(
    {message : "Produto cadastrado!" , produto : produto}
)

app.use(express.json());

let produtos : Produto[] = [];

//listar todos os  produtos//
app.get("/", function(request : Request, response : Response) : Response{
    return response.status(200).json({ message : "Ok", dados : produtos});
});


//buscar produto por//
app.get("/:categoria/:produto", (request : Request, response : Response) : Response => {
    const { categoria, produto } = request.params;
    return response.status(200).json({categoria, produto});

});


//cadastrar produto//
app.post("/", (request : Request, response : Response) : Response=> {
    let produto : Produto = new Produto();
    produto.nome = request.body.nome;
    produto.preco = request.body.preco;
    
    produtos.push(produto);

    
    return response.status(201).json
    (
        {message : "Produto cadastrado!", dados : produto}
    );
});

//implementar as funcionalidades no vetor de busca, alteraçao e remoção
//implementar o banco na aplicação (Prisma)
app.listen(3000, function(){
    console.clear();
    console.log("Aplicação rodando na porta 3000");
});