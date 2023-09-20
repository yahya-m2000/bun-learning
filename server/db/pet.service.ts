import PetDB ,{ Pet, PetType } from "./pet.database";

export default class PetService {
    db: PetDB;

    constructor(db: PetDB) {
        this.db = db;
    }

    getPets(){
        console.log(this.db.getPets())
        return this.db.getPets();
    }

    getPet(id:string){
        console.log(this.db.getPet(id))
        this.db.getPet(id)
    }

    createPet(type:PetType){
    
        this.db.createPet(type)
    }

    updatePet(pet:Pet){
        this.db.updatePet(pet)
    }
    deletePet(id:string){
        this.db.deletePet(id)
    }
}