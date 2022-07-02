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
          <button type="button" onClick={() => handleChangeValue("-")}>
            -
          </button>
          <div>{count.value}</div>
          <button type="button" onClick={() => handleChangeValue("+")}>
            +
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
