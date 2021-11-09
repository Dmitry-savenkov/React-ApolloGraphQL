import './App.css';
import { GET_TODOS } from './graphQL/Query.js';
import { useQuery, useMutation } from '@apollo/client'
import AddTodo from './components/AddTodo.js';
import Todo from './components/Todo.js';
import { TodoContext } from './TodoContext';
import { useState } from 'react';

function App() {
  const [selectedId, setSelectedId] = useState(0)
const { loading, error, data } = useQuery(GET_TODOS);
console.log('data', data)
if (loading) return <p>loading...</p>
if (error) return <p>{error.message}</p>
return (
  <TodoContext.Provider value={{selectedId,setSelectedId}}>
<div className="container todobox">
<AddTodo />
<div className="list-group mt-4">
{data?.getTodos.map(todo => (
    <Todo 
      key={todo.id}
      id={todo.id}
      title={todo.title}
      detail={todo.detail}
      date={todo.date}
    />)
)
}
</div>
</div>
</TodoContext.Provider>
);
}
export default App;