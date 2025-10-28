import { Router } from "express";
import { AutorController } from "../../controller/autor.controller.js";


const autorRouter = Router();
const autorController = new AutorController();

autorRouter.get("/all", autorController.getAutores.bind(autorController));
autorRouter.get("/:id",autorController.getAutor.bind(autorController));
autorRouter.post("/add",autorController.addAutor.bind(autorController));
autorRouter.delete("/delete/:id",autorController.deleteAutor.bind(autorController));
autorRouter.put("/edit/:id",autorController.editAutor.bind(autorController));


export default autorRouter;