import "./app.css"

import { FaCar } from "react-icons/fa"
import { FaPlane } from "react-icons/fa6"
import { FaCopy } from "react-icons/fa"
import { FcHome } from "react-icons/fc"
import { FcServices } from "react-icons/fc"
import { FcAlarmClock } from "react-icons/fc"




let Navbar=()=>{

return(

<>
<nav id="nav">
<ul>
    <li>
        <h1> <FcAlarmClock/>Ani-Motion</h1>
    </li>
</ul>

<ul id="nav1">
    <li><FaCar/>Home</li>
    <li><FaPlane size={40} color="red"/>Services</li>
    <li><FaCopy/>Motion</li>
    <li><FcHome/>About</li>
    <li><FcServices/>Help</li>
</ul>

<ul id="nav2">
    <li>Plane</li>
    <li>BIkes</li>
    <li>Cars</li>
</ul>

    
</nav>
 
 <section id="sec1">
 
 <>

  <h1 className="head1">Transition</h1>
  
 <img src="action.jpg" alt="" style={{width:"300px" , height:"300px"}} className="sec1img1" />
 <img src="nature.jpg" alt="" style={{width:"600px" , height:"300px"}} className="sec1img2" />
 <img src="action.jpg" alt="" style={{width:"300px" , height:"300px"}} className="sec1img3" />

 <div className="line1">

   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Sapiente fuga sequi a laboriosam saepe, ab inventore et quia eius, voluptatum vitae! Quia <br />rem ducimus cupiditate libero earum, quis voluptatem, eum ipsa officiis mollitia quisquam quo nobis <br /> in cumque? Nemo amet totam praesentium sit reprehenderit labore itaque. Inventore delectus illum blanditiis!</p>


 </div>

 </>

 </section>


</>


)


}

export default Navbar