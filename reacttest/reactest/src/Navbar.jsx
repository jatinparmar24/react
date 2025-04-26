import "./App.css"

import { FaHome } from "react-icons/fa";
let Navbar=()=>{
    return(
        <>
        
           <nav className="nav">
           <ul>
            <h1><img src="action.jpg" alt="" style={{width:"70px",height:"70px",borderRadius:"20px",marginTop:"1%"}}/></h1>
            
           </ul>
           <ul className="index">
               <li>Home</li>
               <l1>About</l1>
               <l1>Contact</l1>
               <l1>Services</l1>
               <l1>Terms</l1>
               

           </ul>
           <FaHome />
           </nav>

        </>
    )
}
export default Navbar