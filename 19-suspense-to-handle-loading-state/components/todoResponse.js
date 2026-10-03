import React from 'react'

const TodoResponse = async () => {
    
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
  const todos = await response.json()
  console.log(todos)

  return (
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
  )
}

export default TodoResponse