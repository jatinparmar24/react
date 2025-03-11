import axios from "axios"
import { useEffect, useState } from "react"


function Jsondata(){

    
    let[apidata,setapidata]=useState([])

    let[insertdata,setinsertdata]=useState([])

    //for edit form
    let[showform,setform]=useState(false)

    //for edit particular data
    let[editdata,seteditdata]=useState({})
    
    function del(id){
        axios.delete(`http://localhost:3000/students/${id}`)
       .then(res=>alert("Deleted"))
    }
    

    useEffect(()=>{
        axios.get('http://localhost:3000/students')
        .then(res=>{setapidata(res.data);
         })
    },[del])

    function insertname(e){
        const{name,value}=e.target
        setinsertdata({...insertdata,[name]:value})
    }

    function loginsub(e){
        e.preventDefault()
        axios.post('http://localhost:3000/students',insertdata)
        .then(res=>{console.log(res.data)}
        )
        .then(res=>alert("Data Inserted"))
    }
    
    //edit details 

   function editchange(e){
       const{name,value}=e.target
       seteditdata({...editdata,[name]:value})

   }

  function editsubmit(e){
    e.preventDefault()
    axios.put(`http://localhost:3000/students/${editdata.id}`,editdata)
    .then(res=>alert("Edited"))
  }







    return(

        <>

        <table border="1" style={{width:"300px",height:"300px",marginLeft:"25%",fontSize:"20px",marginTop:"6%"}}>
            <thead>
                <tr>
                   
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                    <th>Contact</th>
                    <th>Delete</th>
                </tr>
            </thead>

            <tbody>
               {/* {apidata.map((e)=>(
                <tr>
                    <td>{e.name}</td>
                    <td>{e.age}</td>
                    <td>{e.city}</td>
                    <td>{e.contact}</td>
                </tr>
               ))} */}

               {apidata.map((e,index)=>{return<>
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{e.name}</td>
                    <td>{e.age}</td>
                    <td>{e.city}</td>
                    <td>{e.contact}</td>
                    <td><button onClick={()=>del(e.id)} style={{backgroundColor:"red",color:"white"}}>Delete</button></td>
                    <td><button onClick={(setform(true),seteditdata(e))}>Edit</button></td>
                </tr>
               </>})}
            </tbody>

            {/* 
             apidata.map((e)=>{
                return<>
                <tr>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.age}</td>
                    <td>{e.city}</td>
                    <td>{e.contact}</td>
                
                <tr/>

                </>
                
                })
            
            
            */}

        </table>

        <h1>Form Data</h1>

       

        <form action="" onSubmit={loginsub}>
            <label htmlFor="">Username</label>:-
            <input type="text" onChange={insertname} name="name"/> <br /> <br /> <br />

            <label htmlFor="">Age</label>:-
            <input type="text" onChange={insertname} name="age"/> <br /> <br /> <br />

            <label htmlFor="">City</label>:-
            <input type="text" onChange={insertname} name="city"/> <br /> <br /> <br />

            <label htmlFor="">Contact</label>:-
            <input type="text" onChange={insertname} name="contact"/> <br /><br /> <br />

            <input type="submit" />
        </form>


       
           
           <h1>Edit Form</h1>
          
        {showform && (

        <form action="" onSubmit={editsubmit}>

      

            <label htmlFor="">name</label>
            <input type="text" name="name" value={editdata.name}  onChange={editchange}/> <br /> <br />

            <label htmlFor="">age</label>
            <input type="text" name="age" value={editdata.age}  onChange={editchange}/> <br /> <br />

            <label htmlFor="">city</label>
            <input type="text" name="city" value={editdata.city} onChange={editchange}/> <br /> <br />

            <label htmlFor="">contact</label>
            <input type="text" name="contact" value={editdata.contact} onChange={editchange}/> <br /> <br />

            <input type="submit" />
        </form>

         )}
        </>
    )
}
export default Jsondata