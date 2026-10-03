import SlowResponse1 from "@/components/slowResponse1";
import SlowResponse2 from "@/components/slowResponse2";
import TodoResponse from "@/components/todoResponse";
import { Suspense } from "react";

const Todos = async () => {


  return (
    <>
      <h1>Todos</h1>

      <Suspense fallback={<div className="todos-container">
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={index} className="shimmer">
            <div className="shimmer-checkbox"></div>
            <div className="shimmer-text"></div>
          </li>
        ))}
      </div>}>
        <TodoResponse/>
      </Suspense>

      <Suspense fallback={<div> loading data1...</div>}>
        <SlowResponse1/>
      </Suspense>

      <Suspense fallback={<div> loading data2...</div>}>
        <SlowResponse2/>    
      </Suspense>
  
    </>
  );
};

export default Todos
