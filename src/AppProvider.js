import React, { createContext, useContext, useReducer, useState } from 'react'
import { mainReducer, initialMainState } from './reducers/MainReducer'
import { sideReducer, initialSideState } from './reducers/SideReducer'

// Crear un contexto
const AppContext = createContext()

const useAppContext = () => {
    return useContext(AppContext)
}

// Cualquier componente child dentro de la gerarquia (dentro del provider)
// tendrá disponibles los datos del estado compartido

// Crear un proveedor del contexto
const AppProvider = ({ children }) => {
    // usando useState
    // const [sharedState, setSharedState] = useState(null) 
    
    // usando useReducer
    const [mainSharedState, mainDispatch,] = useReducer(mainReducer, initialMainState)
    const [sideSharedState, sideDispatch]  = useReducer(sideReducer, initialSideState)
    
    return (
        // <AppContext.Provider value={{ sharedState, setSharedState }}>{children}</AppContext.Provider>

        <AppContext.Provider value={{ // el value puede ser una funcion, un objeto o lo que sea
            mainSharedState, mainDispatch,
            sideSharedState, sideDispatch
        }}>
            {children}
        </AppContext.Provider>
    )
}

export {
    AppProvider, useAppContext
}