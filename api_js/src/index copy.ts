import express from "express";

//Criando um servidor web através do express
const app = express();


//Configurar a aplicação para receber dados no formato JSON
app.use(express.json());

//Configurando uma requisição com o método GET para
//a raiz da aplicação
app.get("/", function(request, response){
    console.log("Primeira requisição recebida!");
    response.status(200).json({ message : "Resposta enviada em JSON"});
});


//EXERCÍCIO - Criar uma nova rota/funcionalidade para receber uma
//informação pela URL da requisição
app.get("/:categoria/:produto", (request, response) => {
    console.log(request.params.categoria, request.params.produto);
    const { categoria, produto } = request.params;
    response.status(200).json({categoria, produto});

});

//EXERCÍCIO - Criar uma nova rota/funcionalidade com método POST para receber uma
//informação pelo corpo do requidito
//POSTMAN, INSOMNIA e RESTCLIENT
app.post("/", (request, response) => {
    response.status(201).json
    (
        {message : "Categoria cadastrada!", categoria : request.body}
    );
});


//O comando listen roda a aplicação
app.listen(3000, function(){
    console.clear();
    console.log("Aplicação rodando na porta 3000");
});