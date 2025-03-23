
import {configureStore} from "@reduxjs/toolkit"
import CartReducer from './Slice'


const Appstore=configureStore({
    reducer:{
        cart: CartReducer
    }
});

export default Appstore