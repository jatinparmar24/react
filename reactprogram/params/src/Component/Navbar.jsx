
import { Link, Outlet } from "react-router-dom"


function Navbar(){
    return(
        <>
        <nav>
            <ul>
                <h1>LOGO</h1>
            </ul>
            <ul>
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/user'>User</Link></li>
                <li><Link to='/user/1'>User 1</Link></li>
                <li><Link to='/user/2'>User 2</Link></li>
                <li><Link to='/user/3'>User 3</Link></li>
            </ul>
        </nav>

        <Outlet/>
        </>
    )
}

export default Navbar