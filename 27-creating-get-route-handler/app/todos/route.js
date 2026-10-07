export function GET() {
    console.log("Running GET route handler")
    return new Response(JSON.stringify({message :"Hello Nishant Bhati"}))
}