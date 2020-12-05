import React, { useContext} from 'react'
import WorksComponent from '../Components/WorksComponent'
import {Context} from '../GlobalContext';

export default function Works() {
    const {state, dispatch} = useContext(Context);
    const {worksArr} = state;
     const worksElements = worksArr.map(work => {
         return <WorksComponent key={work.id} {...work} />
     })
    return (
        <>
            {worksElements}
        </>
    )
}
