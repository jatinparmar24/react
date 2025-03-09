import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
// import { Link } from "react-router-dom"

function Login(){

    let homepage=useNavigate()


    let[logindata, setlogindata]=useState({
        username:'',password:''
    })

    let[signlogdata,setsign]=useState("")

    function iglog(e){
        let{name,value}=e.target
        setlogindata({...logindata,[name]:value})
    }

    useEffect(()=>{
        let signdata=JSON.parse(localStorage.getItem("username"))
        setsign(signdata)
    },[])


    function loginfinal(e){
        e.preventDefault()
        console.log(logindata);

        if(signlogdata.username != logindata.username || signlogdata.password != logindata.password){
            alert("user not found")
        }

        else{
            homepage('/form')
        }
            
         
    }

    return(

        <>
        <h1>Login Page</h1>
        {/* <Link to='/'>Login Page</Link> */}

        <form action="" onSubmit={loginfinal}>

            <label htmlFor="">Username</label>
            <input type="text"  name="username" onChange={iglog} /> <br />

            <label htmlFor="">Password</label>
            <input type="text"  name="password" onChange={iglog}/> <br />

            <input type="submit" />


        </form>

        </>
    )
}

export default Login