import React, { useEffect, useReducer, Fragment } from 'react';
import ReactDOM from 'react-dom';

export default function Reducer() { 
    const endpoint = "https://pokeapi.co/api/v2/berry-firmness/";

    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case "SET_POKES": {
                return { ...state, pokes: action.newPokes }
            }
            default:
                return state;
        }
    }, {
        pokes: [],
        animals: [],
    });

 
    async function fetchPoke() { 
        const res = await fetch(endpoint);
        const data = await res.json();
        dispatch({type: "SET_POKES", newPokes: data.results})
    }
    
      useEffect(() => {
        fetchPoke()
    }, [])
    
      const pokesArr = state.pokes;

     const pokesElement = pokesArr.map(poke => {
         return(
             <Fragment key={poke.name}>
                <p>{poke.name}</p>
                 <a href={poke.url}>Click the link</a>             </Fragment>
         )
     })
    return (
        <div>
             {pokesElement}
        </div>
    )
}

ReactDOM.render(<Reducer />, document.getElementById("root"));


