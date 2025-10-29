import { Autor } from "../../modules/autor/interface/autor.interface";
import { AutorRest } from "./autor.interface.rest";

export class AutorMapper{


    static mapRestAutorToAutor(autorRest:AutorRest):Autor{
        return {
            AutorID : autorRest.AutorID,
            Nombre : autorRest.Nombre,
            Pais : autorRest.Pais
        }
    }

    static mapRestAutorArrayToAutorArray(autorRestArray:AutorRest[]):Autor[]{
        return autorRestArray.map(this.mapRestAutorToAutor)
    }
}