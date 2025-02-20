import { useState } from "react"


function Plus(){

    let [Plise,setPlise]=useState(0)

    function Plse(){
        setPlise(Plise+1)
    }



    return(
           <>
               <p>Count :- {Plise} </p>
               <button onClick={Plse}>Increase</button>
           
           
           </>
    )
    
}

export default Plus