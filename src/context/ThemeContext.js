import { createContext, useReducer } from "react";
import React from 'react'

export const themContext = createContext()

function reducer(state, action) {
    switch(action.type) {
        case 'TOGGLE_MODE':
            return { darkMode: !state.darkMode }

        default:
            return state
    }
}


export const ThemeContext = (props) => {
    const [state, dispatch] = useReducer(reducer, { darkMode: false })
  return (
    <themContext.Provider value={{ state, dispatch }}>
      {props.children}
    </themContext.Provider>
  )
}

