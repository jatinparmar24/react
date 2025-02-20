
import { useState } from "react"

import "./App.css"

function UseState(){

    let [name,setName]=useState("")

    function Demo(){
        setName("Jatin Parmar")
    }


    return(

        <>

        <h1>My Name Is {name}</h1>
        <button onClick={Demo}>Tap To Change</button>

        </>
    )
}

export default UseState