import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
// import { Link } from "react-router-dom"


function Oneusestate(){

    let loginpage=useNavigate()

    let[formdata,setformdata]=useState({
        username:"",email:"",password:""
    })

    function inpchange(e){
        const {name,value}=e.target
        setformdata({...formdata,[name]:value})
    }

    function finalsubmit(e){
        e.preventDefault()
        console.log(formdata);
        localStorage.setItem("username",JSON.stringify(formdata))
        // localStorage.setItem("username",formdata.username)
        // localStorage.setItem("email",formdata.email)
        // localStorage.setItem("password",formdata.password)
        loginpage('/login')
        
    }



    return(
        <>

        <h1>Sign Up</h1>
           <form action="" onSubmit={finalsubmit}>

                  <label htmlFor="">Username</label>
                  <input type="text" name="username" onChange={inpchange} /> <br /> <br />

                  <label htmlFor="">E-Mail</label>
                  <input type="text" name="email" onChange={inpchange} /> <br /> <br />

                  <label htmlFor="">Password</label>
                  <input type="text" name="password" onChange={inpchange} /> <br /> <br />

                  <input type="submit"  />


           </form>

          
        </>
    )
}

export default Oneusestate