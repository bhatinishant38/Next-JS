import todosData from '../../todos.json' with { type : "json"}

console.log(todosData)

export function GET(request) {
    console.log(request)
    return Response.json(todosData)
  
}