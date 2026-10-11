import todosData from '../../../todos.json' with { type : "json"}

console.log(todosData)

export async function GET(request, { params }) {
    const {id } = await params
    console.log(id)

    const todo = todosData.find((todo)=> id === todo.id.toString())

    if(!todo) {
        return Response.json({error:"todo not found"} ,{status:404})
    }

    return Response.json(todosData[0])
}


export async function PUT(request) { 
   const todo = await request.json()
   const newTodos = {
      id : crypto.randomUUID(),
      text : todo.text,
      completed : false
   } 
//    todosData.push(newTodos)
//     writeFile('todos.json' , JSON.stringify(todosData))
   return Response.json(newTodos)
  
}