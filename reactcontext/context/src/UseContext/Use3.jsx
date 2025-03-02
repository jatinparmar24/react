
import React, { useContext } from "react"
import {  seconddata } from "./Use1"


function Use3(){

    let state=useContext(seconddata)
    console.log(state);
    


    return(
        <>
        <h1>This {state} </h1>

         <h2> object {state.object.name}</h2>
        </>
    )
}

export default Use3