import React, {useState, useEffect, createContext, useReducer } from 'react'
import WorksData from './PortfolioData.json';


const Context = createContext();

 function GlobalContext({children}) {
    const [state, dispatch] = useReducer((state, action) => {
       
        switch (action.type) {
            case "SET_PORTFOLIO_DATA": {
                return {...state, worksArr: WorksData}
            }
            default:
                break;
        }
    },{
        worksArr: [],
    })


    useEffect(() => {
        dispatch({type:"SET_PORTFOLIO_DATA" })
    }, [])
 
    return (
         <Context.Provider value={{state, dispatch}}>
             {children}
         </Context.Provider>
    )
}

export {Context, GlobalContext}
