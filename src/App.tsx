import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store'
import { addCount, removeCount } from './store/count'


function App() {
  const count = useSelector((state: RootState) => state.countReducer)
  const dispatch = useDispatch();

  const handleChangeValue = (type: "+" | "-") => {
    if(type === "+"){
      dispatch(addCount(1))
    }
    if(type === "-"){
      dispatch(removeCount(1))
    }

    return console.log("função chamada"+ type)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img data-testid="logo"src={logo} className="App-logo" alt="logo" />
        <p data-testid="title">Hello Vite + React!</p>
        <p style={{display:'flex'}}>
          <button id="remove-count"type="button" onClick={() => handleChangeValue("-")}>
            -
          </button>
          <div id="count-div">{count.value}</div>
          <button id="add-count" type="button" onClick={() => handleChangeValue("+")}>
            +
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
      
      </header>
    </div>
  )
}

export default App
