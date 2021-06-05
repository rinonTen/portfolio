import React, { useContext, useEffect } from 'react'
import { Context } from '../contexts/globalContext'
import { AboutContainer } from '../containers'

export default function About() {
  const { setHomeActive, setAboutActive, setWorksActive } = useContext(Context)
  function setAboutToActive() {
    setHomeActive('')
    setAboutActive('aboutActive')
    setWorksActive('')
  }

  useEffect(() => {
    setAboutToActive()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <AboutContainer />
}
