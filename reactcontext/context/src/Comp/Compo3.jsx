import React from "react"
import { newdata } from "./Compo1"

function Compo3(){
    return(
        <>

        <newdata.Consumer>
            {
                (detail)=>{
                    return(
                        <>

                        <h1>My Age Is {detail}</h1>
                        
                        </>
                    )
                }
            }
        </newdata.Consumer>

        </>
    )
}
export default Compo3
