import React, {useState} from "react";


function ToDo()
{
    const [todos, setTodos]=useState([]);
    const [newTodo, setNewTodo]=useState([]);

    function handleInputChange(e)
    {
        setNewTodo( e.target.value )
    }
    function addTodo()
    {
        if(newTodo.trim()!=="")
        {
            setTodos(t=>[...t,newTodo])
        setNewTodo("")
        }
    }
    function deleteTodo(index)
    {
        const filterTodos= todos.filter((_,i)=>i!==index)
        setTodos(filterTodos)
    }
    function up(index)
    {
        if(index>0)
        {
            const updated=[...todos];
            [updated[index],updated[index-1]]= [updated[index -1],updated[index]]
            setTodos(updated)

        }
    }
    function down(index)
    {
        if(index<todos.length-1)
        {
            const updated=[...todos];
            [updated[index],updated[index+1]]= [updated[index +1],updated[index]]
            setTodos(updated)

        }
    }

 
    return(
        <div className="container">

            <h1>
                todos
            </h1>
            <div>
            <input type="text" value={newTodo} onChange={handleInputChange}/>
            <button className="add" onClick={addTodo}>add </button>

            </div>
            <ul>
                {todos.map((todo,index)=>
                <li key={index}> 
                <div className="TODO"><span> {todo} </span></div>
                <button className="delete" onClick={()=>deleteTodo(index)}>delete</button>
                <button className="move" onClick={()=>up(index)}>up</button>
                <button  className="move" onClick={()=>down(index)}>down</button>
                </li>

               
            )
                }
            </ul>



        </div>
    )


}

export default ToDo
