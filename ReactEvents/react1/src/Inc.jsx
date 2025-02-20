
import { useState } from "react"

function Inc(){

    let[sum,setSum]=useState(0)

    function incre(){
        // work in double click
        // setSum(sum++) 

        // work in single click
        setSum(sum+1)
    }

    function decre(){
        
         // work in double click
        // setSum(sum--) 

        // work in single click
       if (sum!=0){
        setSum(sum-1)
       }
        
    }


    return(
        <>
            <h1>Count is :- {sum}</h1>
            <button onClick={incre}>Increament</button>  <br /> <br /><button onClick={decre}> Decreament</button>

        </>
    )
}

export default Inc