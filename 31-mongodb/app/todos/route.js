

import { db } from '@/lib/db'
import todosData from '../../todos.json' with { type : "json"}
import { readFile, writeFile } from 'fs/promises'

console.log(todosData)



export async function GET(request) {

   const result = await db.collection('users').insertOne({ name : "Nishant Bhati"})
   
  const todoJSONString = await readFile('./todos.json', 'utf-8')
  const todos = JSON.parse(todoJSONString)
  return Response.json(todos)
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
   await writeFile('todos.json', JSON.stringify(todosData))
   return Response.json(newTodos ,{
    status:201
   })
}