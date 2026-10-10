import todosData from '../../../todos.json' with { type : "json"}

console.log(todosData)

export async function GET(req, { params }) {
    const {id } = await params
    console.log(id)

    const todo = todosData.find((todo)=> id == todo.id)

    if(!todo) {
        return Response.json({error:"todo not found"} ,{status:404})
    }


   


   

    return Response.json(todosData[0])
}