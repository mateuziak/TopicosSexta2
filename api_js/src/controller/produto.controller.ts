import { Request, Response } from 'express';
import { Produto } from "../models/produto.model";

let produtos : Produto [] = [];

export class ProdutoController{
    
        listar(request: Request, response: Response): Response {
            return response.status(200).json({ message : "Ok", dados : produtos});
        }

        buscar(request: Request, response: Response): Response {
            const {nome} = request.params;
            //laço tradicional - index
            //foreach
            for(let produtoCadastrado in produtos){
                if(produtoCadastrado.nome == nome){
                    return response.status(200).json(
                        {message: "OK" , dados : produtoCadastrado });
                }
            } 
            return response.status(404).json({message : "Produto não encontrado"});
            //find
            return response.status(200).json({ message : "Ok", dados : nome});
        }
        cadastrar(request: Request, response:  Response) : Response{
            let produto : Produto = new Produto();
            produto.nome = request.body.nome;
            produto.preco = request.body.nome;
            produtos.push(produto);
            
            return response
            .status(201)
            .json
            ({message : "Porduto cadastrado", produtos : produto})
        }
            
}