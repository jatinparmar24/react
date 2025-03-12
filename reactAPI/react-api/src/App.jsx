
// import { useEffect, useState } from 'react'
import './App.css'
// import axios from "axios"
import Jsondata from './jsondata'




function App() {

  // let[datas,setdata]=useState([])

  // useEffect(()=>{
  //   axios.get('https://jsonplaceholder.typicode.com/comments')
  //   .then(res=>{setdata(res.data);
  //   })
  // },[])

  return (
    <>
       <h1> Redux Tool-Kit</h1>

        {/* <table border="1">

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
            </tr>
          </thead>

          <tbody>

            {datas.map((e)=>{return <>
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.body}</td>
              </tr>
            </>
            })}
           
          </tbody>
        </table> */}

        <Jsondata/>
       
    </>
  )
}

export default App
