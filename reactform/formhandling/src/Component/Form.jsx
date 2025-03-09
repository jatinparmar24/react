import React, { useState } from 'react'



function Form(){

   let [formdata,setformdata]= useState("")

    function impchange(e){
         setformdata(e.target.value)
    }
    return(
        <>

        <h1> formmm</h1>

        <h1> This Is {formdata}</h1>
        <input type="text" placeholder='Enter Your Name' onChange={impchange} /> <br /> <br />
       
        </>
    )
}

export default Form