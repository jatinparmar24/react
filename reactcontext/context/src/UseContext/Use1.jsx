
import React, { createContext } from "react"
import Use2 from "./Use2"

let seconddata=createContext()
let city="sehore"

let object={name:"jatin parmar",age:25,mark:90}

function Use1(){
    return(
        <>

        <h1>This is with useContext hook</h1>

    <seconddata.Provider value={{city,object}}>
            <Use2/>
        </seconddata.Provider>

        {/* <obj.Provider value={object}>
            <Use2/>
        </obj.Provider> */}

   


        </>
    )
}

export {seconddata}
export default Use1