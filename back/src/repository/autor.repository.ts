import { PrismaClient, Prisma } from "@prisma/client";


const prisma = new PrismaClient();

export class AutorRepository{

    constructor(){}


    public async obtenerAutores(){
        return await prisma.autor.findMany();
    }

    public async obtenerAutor(id: number) {
        return await prisma.autor.findUnique({
            where: { AutorID: id }
        });
    }

    public async addAutor(autor: Prisma.AutorCreateInput){
        await prisma.autor.create({
            data: autor
        });
    }

    public async deleteAutor(id:number){
        await prisma.autor.delete({
            where: {AutorID : id}
        })
    }
}