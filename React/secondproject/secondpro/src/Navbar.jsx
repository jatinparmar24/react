
import Myimg from "./comedy.jpg"
let Navbar=()=>{

return(

<>
<nav className="navbar">
<ul><li><h1>Title</h1></li></ul>
   <ul>
    <li>Home</li>
    <li>About</li>
    <li>Services</li>
    <li>Contact</li>
    <li>Help</li>
   </ul>
</nav>

<section className="heros">

<div className="leftside">
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum perspiciatis alias in aperiam adipisci obcaecati necessitatibus voluptas impedit vel quia maiores, id porro inventore sapiente officia molestias assumenda rem! Laboriosam hic nihil laudantium doloribus commodi aperiam magnam neque veritatis impedit!</p></div>


 <div className="rightside">

 <img src="action.jpg" alt="" style={{width:"200px" , height:"200px", borderRadius:"20px"}} /> <br />
   <img src="src/adventure.jpg" alt="" style={{width:"200px" , height:"200px", borderRadius:"20px"}}  /> <br />
   <img src={Myimg} alt="" style={{width:"200px" , height:"200px", borderRadius:"20px"}}  />
 </div>
</section>

</>

)

}

export default Navbar