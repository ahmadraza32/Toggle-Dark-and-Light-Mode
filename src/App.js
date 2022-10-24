import React, { useContext } from 'react'
import './App.css'
import { themContext } from './context/ThemeContext'

const App = () => {
  const {state, dispatch} = useContext(themContext)
  
  const {darkMode} = state
  
  return (
    <div className='container' style={{ backgroundColor: darkMode && 'black', color: darkMode && 'white' }}>
      <button onClick={() => dispatch({ type: 'TOGGLE_MODE'})}>Toggle Mode</button>
      <h1>Lorem Ipsum</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nihil, facere, ipsam facilis eius accusamus quia assumenda error fugiat, nobis illum corporis perspiciatis dolor corrupti. Quibusdam odio laboriosam quo tempore debitis placeat veritatis, id alias minus eos maxime culpa ea et! A doloremque molestias nemo repudiandae facere inventore, fugiat pariatur aliquid ipsa culpa atque alias? Aperiam laboriosam recusandae exercitationem, quas accusamus nulla at obcaecati, tempora qui nemo temporibus totam ut omnis non similique, quis quam mollitia alias a consectetur! Facilis porro beatae voluptas, at expedita quam recusandae adipisci enim nisi optio cupiditate deserunt autem neque dolor inventore iure, modi sed!
      </p>
    </div>
  )
}

export default App
