import React, { useContext, useEffect } from 'react';
import { Context } from '../contexts/globalContext';
import { HomeContainer } from '../containers';

export default function Home() {
    const { setHomeActive, setAboutActive, setWorksActive } = useContext(Context);
    function setHomeToActive() {
        setHomeActive("homeActive");
        setAboutActive("");
        setWorksActive("")
    }

    useEffect(() => {
        setHomeToActive()
    }, [])

    return (
        <HomeContainer />
    )
}
