import {Router} from "express";
import { ProdutoController } from './../controller/produto.controller';

const router : Router = Router();

router.post("/", new ProdutoController().cadastrar)
router.get("/", new ProdutoController().listar);
router.get("/:nome", new ProdutoController().buscar);

export {router};