import react, { createContext } from "react"
import Compo3 from "./Compo3"
let newdata= createContext()
let age=25

function Compo1(){
    return(
        <>
          <newdata.Provider value={age}>

            <Compo3/>
          </newdata.Provider>
        </>
    )
}

export default Compo1
export {newdata}
