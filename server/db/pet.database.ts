import { Database } from "bun:sqlite";

export enum PetType {
    DOG = "Dog",
    CAT = "Cat",
    BIRD = "Bird",
    FISH = "Fish",
    RABBIT = "Rabbit",
    HAMSTER = "Hamster",
    TURTLE = "Turtle",
    GUINEA_PIG = "Guinea Pig",
    SNAKE = "Snake",
    LIZARD = "Lizard",
}


export interface Pet {
    id?: string,
    type?: string,
}

export default class PetDB {
    db: Database

    constructor(){
        this.db = new Database("petdb.sqlite")

        this.db.run(
            "CREATE TABLE IF NOT EXISTS pets (id INTEGER PRIMARY KEY AUTOINCREMENT, type TEXT)"
        )
    }

    getPets():Pet[]{
        return this.db.query("SELECT * FROM pets").all()
    }

    getPet(id:string):Pet{
        return this.db.query("SELECT * FROM pets WHERE id = $id").get({$id: id})
    }

    createPet(petType:PetType){
        this.db.run("INSERT INTO pets (type) VALUES (?)", petType)
    }

    updatePet(pet: Pet){
        this.db.run("UPDATE pets SET type=? WHERE id=?",[pet.type, pet.id])
    }

    deletePet(id:string){
    
        this.db.run("DELETE FROM pets WHERE id =?", id)
    }
}
