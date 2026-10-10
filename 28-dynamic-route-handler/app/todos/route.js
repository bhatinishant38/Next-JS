import todosData from '../../todos.json' with { type : "json"}

console.log(todosData)

export function GET() {
    console.log("Running GET route handler")

    // return Response.json(todosData)
    return new Response(JSON.stringify(todosData)  ,{
        headers:{
            "Content-Type": "application/json"
         
        },
        status:200 ,
        statusText : "Nishant Bhati"
    })
}