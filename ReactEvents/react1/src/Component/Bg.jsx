import { useState } from "react"

function Bg(){
  

    let[bgcolor,setbgcolor]=useState()

    let[hide,sethide]=useState(true)
  


    return(
        <>
          
            <div style={{width:"100%",height:"90vh",backgroundColor:bgcolor}}>




            <button onClick={()=>setbgcolor('red')}>Red</button> <br /> <br />
            <button onClick={()=>setbgcolor('cyan')}>Cyan</button> <br /> <br />
            <button onClick={()=>setbgcolor('black')}>Black</button> <br /> <br />
            <button onClick={()=>setbgcolor('orange')}>orange</button> <br /> <br />
            <button onClick={()=>setbgcolor('lightskyblue')}>lightskyblue</button> <br /> <br />
            <button onClick={()=>setbgcolor('yellow')}>Yellow</button> <br /> <br />



                   {/* we use ternary operator in jsx but not if else */}


                    {hide ? <h1>Don't Use The Mobile</h1> : "" }

                
                {/* <h1>Don't Use The Mobile</h1> */}
                  <button onClick={()=>sethide(false)}>Hide</button>

            </div>
       
        
        
        
        
        
        </>
    )
}

export default Bg