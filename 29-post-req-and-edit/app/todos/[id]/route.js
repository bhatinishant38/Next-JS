import todosData from '../../../todos.json' with { type : "json"}
import { writeFile } from 'fs/promises'

export async function GET(request, { params }) {
    const {id } = await params
    console.log(id)

    const todo = todosData.find((todo)=> id === todo.id.toString())

    if(!todo) {
        return Response.json({error:"todo not found"} ,{status:404})
    }

    return Response.json(todosData[0])
}


export async function PUT(request,{params}) { 

   const {id } = await params
   const editTodoData = await request.json()
   const todoIndex = todosData.findIndex((todo)=> id === todo.id)
   const todoData = todosData[todoIndex]

   const editedTodo = { ...todoData , ...editTodoData  } 

   todosData[todoIndex] = editedTodo
   
    writeFile('todos.json' , JSON.stringify(todosData))
   return Response.json(editedTodo)
  
}