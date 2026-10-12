
import todosData from '../../todos.json' with { type : "json"}
import { writeFile } from 'fs/promises'

console.log(todosData)

export function GET(request) {
   
    return Response.json(todosData)
  
}

export async function POST(request) {
    console.log(request)
   const todo = await request.json()
   const newTodos = {
      id : crypto.randomUUID(),
      text : todo.text,
      completed : false
   } 
   todosData.push(newTodos)
    writeFile('todos.json' , JSON.stringify(todosData))
   return Response.json(newTodos ,{
    status:201
   })
}