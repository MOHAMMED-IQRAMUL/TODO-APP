
import { useEffect, useState } from "react"
import Navbar from "./Components/Navbar"
import binSvg from './assets/binSvg.svg'
import editSvg from './assets/edit.svg'
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showCompleted, setShowCompleted] = useState(true)

  useEffect(() => {
    let todoStr = localStorage.getItem("todos")
    if (todoStr) {
      let todoLS = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLS)
    }
  }, [])

  const toogleCheck = () => {
    setShowCompleted(!showCompleted)
  }
  

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }


  const handleChange = (e) => {
    setTodo(e.target.value);
  }
  const handleAdd = () => {
    if (todo != "")
      setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    saveToLS();

  }
  const handleCheck = (e) => {
    let id = e.target.name;
    let idx = todos.findIndex(item => item.id === id);
    let newTodos = [...todos];
    newTodos[idx].isCompleted = !newTodos[idx].isCompleted;
    setTodos(newTodos);
    saveToLS();

  }
  const handleEdit = (e, id) => {
    let t = todos.filter(item => item.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => item.id !== id)
    setTodos(newTodos)
    saveToLS();

  }
  const handleDel = (e, id) => {
    let newTodos = todos.filter(item => item.id !== id)
    setTodos(newTodos)
    saveToLS();
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col  bg-color2 md:w-[75%] mx-auto mt-5 p-5 rounded-lg font-mono min-h-[70vh] w-full ">
        <div className="topnav mb-3">
          <h2 className="font-bold text-xl mb-3">Add Todo</h2>
          <div className="flex w-full md:gap-10 gap-2">
            <input onChange={handleChange} name={todo} value={todo} className=" px-2 pl-4 py-2 w-1/2  rounded-full border-none" type="text" placeholder="Add Todo" />
            <button onClick={handleAdd} className="  px-3 bg-green-500 hover:bg-green-800 hover:text-neutral-50 rounded-full">Add</button>
            <button onClick={handleAdd} className="px-3 bg-green-500 hover:bg-green-800 hover:text-neutral-50 rounded-full">SAVE</button>
          </div>
        </div>
        <div className="pppp flex items-center gap-5 ml-5">
          <input onChange={toogleCheck} className="w-[20px] h-[20px]" type="checkbox" checked={showCompleted}  /> VIEW COMPLETD 
        </div>
        <h2 className="mt-3 font-bold text-xl">Your Todos</h2>
        <div className=" todos flex flex-col gap-2 ">
          {todos.length === 0 && <div className="text-center">No Todos, Start Creating Todos</div>}
         
          {todos.map(item => {

            return (showCompleted||!item.isCompleted) &&  <div key={item.id} className="todo flex  md:flex-row    flex-col md:justify-between  w-[100%]   items-center border border-color3 rounded-3xl md:px-5 px-1 py-1 justify-center  ">
              <div className="flex gap-5 items-center">
                <div className="check flex items-center"><input  name={item.id} onChange={handleCheck} checked={item.isCompleted} className="  w-[15px] h-[15px]" type="checkbox" /></div>
                <div className={item.isCompleted ? "line-through" : ""} >{item.todo}</div>
              </div>
              <div className="flex items-center min-w-[100px] w-[100px] gap-5">
                <button onClick={(e) => { handleEdit(e, item.id) }} className="flex justify-center items-center done-todo w-[30px] h-[30px] rounded-lg text-center bg-green-500  hover:bg-green-800 hover:text-neutral-50  ">
                <img src={editSvg} alt="" /> 
                </button>
                <button onClick={(e) => { handleDel(e, item.id) }} className="flex justify-center items-center done-todo w-[30px] h-[30px] rounded-lg text-center bg-green-500  hover:bg-red-800 hover:text-neutral-50 del-todo " ><img className="hover:scale-150" src={binSvg} alt="" /></button>
              </div>
            </div>

          })}

        </div>
         

      </div >
    </>
  )
}

export default App
