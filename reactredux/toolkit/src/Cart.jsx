

import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { additem } from "./Slice"


const Cart=()=>{

    let datadispatch = useDispatch()

    let storedata = useSelector((store)=>store.cart.cartitem)

    let carts=[
        {
            id:1,name:"laptop",price:50000
        },
        {
            id:2,name:"mobile",price:25000
        }
    ]

    function handlecart(e){
        datadispatch(additem(e))
    }
    return(

        <>

        <h1>Cart Item - {storedata.length}</h1>

        <div>
            {
                carts.map((e)=>{return< div key={e.id}>
               
                <h2>Product Name:-{e.name}</h2>
                <h3>Price {e.price}</h3>
                <button onClick={()=>handlecart(e)}>Add To Cart</button>
                
                </div>})
            }
        </div>

        </>
    )
}

export default Cart