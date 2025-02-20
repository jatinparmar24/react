import "./App.css"

let Task=()=>{

    function Mobile(a){
      display.innerHTML='  <img src="mobile.jpg" alt=""  style={{width:"700px",height:"700px"}} />'
    }

    return(
        <>
        <div id="flex">

        <div id="images">

            <h2>Laptop</h2>
            <h2 onClick={()=>Mobile}>Mobile</h2>
            <h2>Desktop</h2>
            <h2>Tablet</h2>


        </div>

        <div><img src="laptop.jpg" alt=""  style={{width:"700px",height:"700px"}} id="display"/></div>
        
        
        
        </div>
        
        </>

    )
}

export default Task