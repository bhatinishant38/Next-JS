



const Todos = async () => {

  
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
  if (!response.ok) {
    throw new Error(`Failed to fetch todos: ${response.status} ${response.statusText}`)
  }
  const todos = await response.json()


  return (
    <>
      <h1>Todos</h1>

      <div className="posts-container">  
        {
          todos.map(({ id, title, completed})=>(
            <div className="post-card" key={id}>
              <h2>{title}</h2>
             <input type="checkbox" checked={completed} readOnly />
             </div>
          ))
        }  
        
      </div>
    </>
  );
};

export default Todos
