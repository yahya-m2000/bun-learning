import PetDB from "./pet.database"
import PetService from "./pet.service"

const db = new PetDB()
const petService = new PetService(db)


export default {
    port: Bun.env.PORT || 3000,
    async fetch(request: Request){
        const {method, url } = request
        const {pathname, searchParams} = new URL(url)

        console.log(`${method} ${pathname}`)

        if (method === "GET" && pathname === "/pet"){
            const bun = petService.getPet(searchParams.get("id"))
            console.log(JSON.stringify(bun))
            return new Response(JSON.stringify(bun))

        }
        if (method === "GET" && pathname === "/pets"){
            const buns = petService.getPets()
            console.log(JSON.stringify(buns))
            return new Response(JSON.stringify(buns))

        }
        if (method === "POST" && pathname === "/pet"){
            const data = await request.json()
            petService.createPet(data.type)

            return new Response("Pet created successfully")

        }
        if (method === "PUT" && pathname === "/pet"){
            const data = await request.json()
            petService.updatePet(data)

            return new Response("Pet updated successfully")

        }
        if (method === "DELETE" && pathname === "/pet"){
            petService.deletePet(searchParams.get("id"))

            return new Response("Pet deleted successfully")

        }

        return new Response("NOT FOUND", {status: 404})
    }
}