import React from "react"
import { cdata } from "../App"

function Child2(){
    return(
        <>
           <cdata.Consumer>
            {
                (data)=>{
                    return(
                        <>
                           <h1>My Name Is {data}</h1>
                        
                        </>
                    )
                }
            }
           </cdata.Consumer>
        </>
    )
}

export default Child2