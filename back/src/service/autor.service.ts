import { AutorRepository } from "../repository/autor.repository.js";
import {Prisma} from "@prisma/client";


const autorRepository = new AutorRepository();

export class AutorService{

    constructor(){}

    public async getAutores(){
        return await autorRepository.obtenerAutores();
    }

    public async getAutor(id:number){
        return await autorRepository.obtenerAutor(id);
    }

    public async addAutor(autor : Prisma.AutorCreateInput){
        await autorRepository.addAutor(autor);
    }

    public async deleteAutor(id:number){
        await autorRepository.deleteAutor(id);
    }
}