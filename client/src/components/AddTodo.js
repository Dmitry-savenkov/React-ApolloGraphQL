import React, {useContext, useEffect, useRef, useState} from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TODO, UPDATE_TODO } from '../graphQL/Mutation.js';
import { GET_TODOS } from '../graphQL/Query.js';
import { TodoContext } from '../TodoContext';
import moment from 'moment';

const AddTodo = () => {
  const inputAreaRef =  useRef()
  const {selectedId, setSelectedId} = useContext(TodoContext)
  const [todo, setTodo] = useState({
    title: '',
    detail: '',
    date: ''
  })
  useEffect(() => {
    const checkIfClickedOutside = e =>{
      if(!inputAreaRef.current.contains(e.target)){
        console.log("outside input area")
        setSelectedId(0);
      }else{
        console.log("inside input area")
      }
    }
    document.addEventListener("mousedown",checkIfClickedOutside)
    return ()=>{
        document.removeEventListener('mousedown',checkIfClickedOutside)
      }
    },[])
const [addTodo] = useMutation(ADD_TODO)
const [updateTodo] = useMutation(UPDATE_TODO);
const onSubmit = e => {
    e.preventDefault();
    const { title, detail, date } = e.target.elements;
    if( title.value !== "" && detail.value !== "" && date.value !== ""){
      
      if(selectedId === 0){
        addTodo({
          variables: {
          title: title.value,
          detail: detail.value,
          date: date.value
          },
          refetchQueries: [
          { query: GET_TODOS }
          ]
          })
      } else{
        updateTodo({
          variables: {
            id: selectedId,
            title: title.value,
            detail: detail.value,
            date: date.value
          },
          refetchQueries: [
            { query: GET_TODOS }
          ]
          })
      }
    } else{
      alert("Не были введены все нужные значения")
      
    }
    
    }
return (
<form onSubmit={onSubmit} ref={inputAreaRef}>
<div className="form-group mb-3">
<label>Title</label>
<input type="text" name="title" className="form-control" placeholder="Enter title"
value={todo.title}
onChange={e => setTodo({ ...todo, title: e.target.value })}
/>
</div>
<div className="form-group mb-3">
<label>Detail</label>
<input type="text" name="detail" className="form-control" placeholder="Enter Detail"
value={todo.detail}
onChange={e => setTodo({ ...todo, detail: e.target.value })}
/>
</div>
<div className="form-group mb-3">
<label >Date{moment(todo.date).format('yyyy-MM-DD')}</label>
<input type="date" name="date" className="form-control"
value={moment(todo.date).format('yyyy-MM-DD')}
onChange={e => setTodo({ ...todo, date: e.target.value })}
/>
</div>
<button type="submit" className="btn btn-primary">{(selectedId === 0 )? "Add" : "Update "}</button>
</form>
)
}
export default AddTodo