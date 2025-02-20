import "./App.css"
import Child1 from "./Child"

let Card=()=>{

    let name = "Jatin Parmar"
    let age = 24

    let person={
        fname : "Jatin Parmar",
        fage : 24,
        fcity : "Sehore"
    }

    function fun(a){
        // alert("Not Working Then Make It Work")
        return a+a
    }

    // let city = prompt("Enter City")
    // let result = alert(city)

    return(


   <section>

    <div className="img1"><img src="action.jpg" alt="" style={{width:"700px" , height:"400px", borderRadius:"20px"}} /></div>
    <><h1 className="head1">Card</h1></>
    <><p className="para1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, odio!</p></>
    <><button className="bat1">Click To Change</button></>

    <h1>My Name is {name} and i am {age} year old</h1>

    {fun(10)}    

    <h2> My Name is {person.fname}</h2>
    <h2> My age is {person.fage} </h2>
    <h2> I live in {person.fcity}</h2>
    {/* <h2>i live in {result}</h2> */}

     <Child1/>
   </section>


    )
}

export default Card