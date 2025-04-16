
import './App.css'
import {useEffect} from 'react'
import {useState} from 'react'


function App() {

let[color,setColor]=useState('cyan')

let[sum,setSum]=useState(0)

function incre(){
  // setSum(sum++)
  setSum(sum+1)
}

function decre(){
  if(sum!=0){
    // setSum(sum--)
    setSum(sum-1)
  }
}
useEffect(()=>{
  alert("useEffect working ..!!!!!!")
},[color,sum])

// if we leave dependency empty alert works only one time
// like we give color to dependencie it works when we update color and it works every time


  return (
    <>
         <div style={{height:"100vh", backgroundColor:color}}>

         <h1>BackGround-Color Changes</h1>
         <button onClick={()=>setColor('red')}> Change To Red</button> <br /> <br />
         <button onClick={()=>setColor('yellow')}>Change To Yellow</button> <br /> <br /> 
         <button onClick={()=>setColor('lightgreen')}>Change To Lightgreen</button> <br /> <br /> 
         <button onClick={()=>setColor('orange')}>Change To Orange</button> <br /> <br /> 
         <button onClick={()=>setColor('darkblue')}>Change To Darkblue</button> <br /> <br /> 
         <button onClick={()=>setColor('orangered')}>Change To Darkblue</button> <br /> <br /> 



            <h1> Count :- {sum}</h1>
            <button onClick={incre}>Increament</button> <br /> <br /><button onClick={decre}>Decreamnet</button>
       
         </div>
         
    </>
  )
}

export default App
