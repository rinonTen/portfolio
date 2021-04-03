import React, { createContext, useState } from 'react';
import { worksData } from '../portfolioData';
 
const Context = createContext();

function GlobalContext({children}) {
    const [works, ] = useState(worksData); 
    const [ showMenu, setShowMenu ] = useState(false);
    const [ homeActive, setHomeActive ] = useState("");
    const [ aboutActive, setAboutActive ] = useState("");
    const [ worksActive, setWorksActive ] = useState(""); 

    if (showMenu) {
        document.querySelector("body").style.overflowY = "hidden";
    } else {
        document.querySelector("body").style.overflowY = "scroll";
    }

    return (
        <Context.Provider value={{works, showMenu, setShowMenu, homeActive, setHomeActive, aboutActive, setAboutActive, worksActive, setWorksActive }}>
            {children}
        </Context.Provider>
    )
}

export { GlobalContext, Context};