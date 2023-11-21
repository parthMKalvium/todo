import './App.css';
import {useState} from 'react'

function App() {

  let [todos, setTodos] = useState([]);
  let [item, setItem] = useState('');

  const changeItem = (e)=>{
    setItem(e.target.value);
  }

  function addItemToList(){
    setTodos([...todos,item]);
    setItem('')
  }

  function editItem(index, e){
    let tempArr = [...todos];
    for(let i = 0; i < tempArr.length; i++){
      if(i === index){
        tempArr[i] = e.target.value;
      }
    }

    setTodos(tempArr)
    console.log(todos);
  }

  function deleteItem(index){
    let tempArr = [...todos];
    let tempArr2 = [];
    for(let i = 0; i < tempArr.length; i++){
      if(i === index){
        continue;
      }
      else{
        tempArr2.push(tempArr[i])
      }
    }
    setTodos(tempArr2)
  }

  return (
    <>
      <div className='mainContainer'>
        <div className='inputSection'>
          <input type="text" value={item} onChange={(e)=>changeItem(e)}/>
          <button type='submit' onClick={addItemToList}>Addd Item</button>
        </div>
        <div className='list'>
        {todos.map((todo, index)=>{
          return(
            <div key={index}>
              <input type="text" value={todo} onChange={(e)=>editItem(index, e)}/>
              <button type='submit' onClick={()=>deleteItem(index)}>Delete</button>
            </div>
          )
        })}
        </div>
      </div>
    </>
  )
}

export default App
