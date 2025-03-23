import { useSelector } from "react-redux"
import { clearcart } from "./Slice"



function Showcart(){

   function cleardata(e){
    clearcart(null)
   }

    let showdata=useSelector((store)=>store.cart.cartitem)

    return(
        <>
        <div>
            <button onClick={()=>cleardata()}>Clear Cart</button>
            {
                showdata.map((e)=>{
                    return<>
                    <h3>{e.name}</h3>
                    <h3>{e.price}</h3>
                    </>
                })
            }
        </div>

        </>
    )
}

export default Showcart