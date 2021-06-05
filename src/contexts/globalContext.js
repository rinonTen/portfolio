import React, { createContext, useEffect, useState } from 'react'
import { worksData } from '../portfolioData'

const Context = createContext()

function GlobalContext({ children }) {
  const [works, setWorks] = useState([])
  const [showMenu, setShowMenu] = useState(false)
  const [homeActive, setHomeActive] = useState('')
  const [aboutActive, setAboutActive] = useState('')
  const [worksActive, setWorksActive] = useState('')

  useEffect(() => {
    setWorks(worksData)
  }, [])

  if (showMenu) {
    document.querySelector('body').style.overflowY = 'hidden'
  } else {
    document.querySelector('body').style.overflowY = 'scroll'
  }

  return (
    <Context.Provider
      value={{
        works,
        showMenu,
        setShowMenu,
        homeActive,
        setHomeActive,
        aboutActive,
        setAboutActive,
        worksActive,
        setWorksActive,
      }}>
      {children}
    </Context.Provider>
  )
}

export { GlobalContext, Context }
