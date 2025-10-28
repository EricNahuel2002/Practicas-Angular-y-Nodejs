import {type Response, type Request} from "express";
import { AutorService } from "../service/autor.service.js";

const autorService = new AutorService();

export class AutorController{
    constructor(){}


    public getAutores = async(req: Request, res: Response) => {
        try {
            const autores = await autorService.getAutores();
            res.status(200).json(autores);
        } catch (error) {
            return res.status(500).json({
                "errorMessage" : "Error de servidor"
            })
        }
    }


    public getAutor = async(req: Request, res: Response) => {
        try {
            const id = Number(req.params.id);
            const autor = await autorService.getAutor(id);
            res.status(200).json(autor);
        } catch (error) {
            return res.status(500).json({
                "errorMessage" : "Error de servidor"
            });
        }
    }

    public addAutor = async(req: Request, res: Response) => {
        try {
            const newAutor = req.body;
            await autorService.addAutor(newAutor);
            res.status(200).json({
                "successMessage" : "se pudo guardar el nuevo autor"
            })
        } catch (error) {
            return res.status(500).json({
                "errorMessage" : "Error de servidor"
            });
        }
    }
    public deleteAutor = async(req: Request, res: Response) => {
        try {
            const id = Number(req.params.id);
            await autorService.deleteAutor(id);
            res.status(200).json({
                "mensaje": "autor eliminado"
            })
        } catch (error) {
            return res.status(500).json({
                "errorMessage" : "Error de servidor"
            });
        }
    }
    public editAutor = async(req: Request, res: Response) => {
        try {
            const id = Number(req.params.id);
            //await autorService.editAutor(id);
            res.status(200).json({
                "mensaje": "autor eliminado"
            })
        } catch (error) {
            return res.status(500).json({
                "errorMessage" : "Error de servidor"
            });
        }
    }
}