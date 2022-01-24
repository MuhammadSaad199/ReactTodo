
import './App.css';
import Header from "./myComponents/Header";
import Footer from "./myComponents/Footer";
// import TodoItem from "./myComponents/TodoItem";
import {Todos} from "./myComponents/Todos";
import React, { useState } from 'react';



function App() {

const onDelete =(todo)=>{
  console.log("deleted", todo);

  setTodos(todos.filter((e)=>{
    return e !== todo;
  }))
}

const [todos, setTodos] = useState( [
    {
      sno : 1,
      title: "MATCH PRACTICE",
      desc: "you have to go morning play cricket"
    },

    {
      sno : 1,
      title: "Academy",
      desc: "you have to go morning play cricket"
    },

    {
      sno : 1,
      title: "Mall",
      desc: "you have to go morning play cricket"
    },

  ]);


  return (
    <>
    <Header title="My Todo List" searchBar={true} />
    <Todos todos= {todos} onDelete={onDelete}/>
    <Footer/>
    
    </>
  );
}

export default App;
