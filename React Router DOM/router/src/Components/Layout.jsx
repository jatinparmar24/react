
import { Link, Outlet } from "react-router-dom"

function Layout(){
    return(
        <>
           <nav id='navbar'>
            <h1>LOGO</h1>
            <ul>
                <li><Link to='/' style={{textDecoration:'none' ,color:'white',fontSize:"25px"}}>Home</Link ></li>
                <li><Link to='about' style={{textDecoration:'none' ,color:'white',fontSize:"25px"}}>About</Link></li>
                <li><Link to='services' style={{textDecoration:'none' ,color:'white',fontSize:"25px"}}>Services</Link></li>
            </ul>
        </nav>
        
        

            <div>
                <Outlet/>
            </div>



        <footer id=" foot">

             <div>
                <ul>
                    <li>The</li>
                    <li>Ways</li>
                    <li>Longs</li>
                    <li>Untitle</li>
                    <li>Decoration</li>
                </ul>
             </div>

             <div>
                <ul>
                    <li>Linux</li>
                    <li>Mozilla</li>
                    <li>Development</li>
                    <li>KJhjkwugd</li>
                    <li>djdbfkeudgfau</li>
                </ul>
             </div>
        </footer>
        </>

    )
}

export default Layout