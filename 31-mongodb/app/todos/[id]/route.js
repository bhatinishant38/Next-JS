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

   if(editTodoData.id){
      return Response.json(
         { error : "changing ID is not allow."},
         {
            error : 403
         }
      )
   }

   const editedTodo = { ...todoData , ...editTodoData  } 

   todosData[todoIndex] = editedTodo

   await writeFile('todos.json', JSON.stringify(todosData))
   return Response.json(editedTodo)
  
}

export async function DELETE(request, { params }) {
   const {id } = await params
   const todoIndex = todosData.findIndex((todo)=> id === todo.id)
   todosData.splice( todoIndex ,1)
   await writeFile('todos.json', JSON.stringify(todosData, null, 2))
   return new Response(null ,{
      status : 204
   })
}