import { useState } from "react"


function State(){

    let [ob,setob]=useState({

        name:"Jatin Parmar",
        age:24,
        city:"Sehore"

    })

    let [arr,setarr]=useState(["Jatin Parmar",24,"Sehore"])
    
    return(
        <>
              {/* with object */}
               <h1> My Name Is {ob.name} </h1>
               <h1> My Age Is {ob.age} </h1>
               <h1> My City Is {ob.city}</h1>


               {/* with array */}
               <h1> My Name Is  {arr[0]} </h1>
               <h1> My Age Is {arr[1]} </h1>
               <h1> My City Is {arr[2]}</h1>

        
        
        
        </>
    )
}

export default State