import React, { createContext, useState } from 'react';
import { worksData } from '../portfolioData';
 
const Context = createContext();

function GlobalContext({children}) {
    const [works, ] = useState(worksData); 
    const [ showMenu, setShowMenu ] = useState(false);
    if (showMenu) {
        document.querySelector("body").style.overflow = "hidden";
    } else {
        document.querySelector("body").style.overflow = "scroll";
    }

    return (
        <Context.Provider value={{works, showMenu, setShowMenu }}>
            {children}
        </Context.Provider>
    )
}

export { GlobalContext, Context};