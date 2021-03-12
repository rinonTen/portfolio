import React, { createContext, useState } from 'react';
import { worksData, skills } from '../portfolioData';
 
const Context = createContext();

function GlobalContext({children}) {
    const [works, ] = useState(worksData);
    const [technologies, ] = useState(skills);
    const [ showMenu, setShowMenu ] = useState(false); 
    
    return (
        <Context.Provider value={{works, showMenu, setShowMenu, technologies}}>
            {children}
        </Context.Provider>
    )
}

export { GlobalContext, Context};