



const Todos = async () => {

  
 
  // const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
  // const todos = await response.json()
  // console.log(todos)

  // const slowResponse1 = await fetch("https://procodrr.vercel.app/?sleep=2000");
  // const data1 = await slowResponse1.json()
  // console.log(data1)


  // const slowResponse2 = await fetch("https://procodrr.vercel.app/?sleep=3000");
  // const data2 = await slowResponse2.json()
  // console.log(data2)

  const [ todoResponse ,slowResponse1 ,slowResponse2] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5'),
    fetch("https://procodrr.vercel.app/?sleep=2000"),
    fetch("https://procodrr.vercel.app/?sleep=3000"),
  ])

  const [ todos, data1 , data2] = await Promise.all([
    todoResponse.json(),
    slowResponse1.json(),
    slowResponse2.json()
  ])


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

      <div>{JSON.stringify(data1)}</div>
      <div>{JSON.stringify(data2)}</div>
    </>
  );
};

export default Todos
