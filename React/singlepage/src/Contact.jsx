import "./app.css"

let Contact=()=>{
    return(

    <>
    <section id="sec4">

       <h1 id="head4">Contact</h1>
       <div className="sec4div1">

        <div className="sec4icon"><img src="nature.jpg" alt=""  style={{width:"100%",height:"100%",borderRadius:"50%"}}/></div>
          
        <div className="sec4headinds">

          <h2>Blog</h2>
          <h2>Contact</h2>
          <h2>Team Manager</h2>
          <h2>Virtual Header</h2>
          <h2>Deployment Manager</h2>

        </div>

         <div className="sec4last1"><img src="plane4.avif" alt=""  style={{width:"100%",height:"100%",borderRadius:"100%"}}/></div>
         <div className="sec4last2"><img src="plane4.avif" alt=""  style={{width:"100%",height:"100%",borderRadius:"100%"}}/></div>

         <div className="sec4lastdiv">New York,USA -123,Street</div>

       </div>

        {/* second portion */}

        <div id="sec4-maindiv">
            <div><img src="img1.jpeg" alt="" style={{width:"100%" , height:"50%"}} />

            <h2>David Hussey</h2>
            <h2>Contact : 3256987456</h2>
            <h2>Work : Animator</h2>
            <h2>G-Mail : Dav5@gmail.com</h2>

            <button>Contact</button>
            </div>

            <div><img src="action.jpg" alt="" style={{width:"100%" , height:"50%"}} />
            
            <h2>Alex Cololny</h2>
            <h2>Contact : 9874585632</h2>
            <h2>Work : Display-Animator</h2>
            <h2>G-Mail : Alex7@gmail.com</h2>

            <button>Contact</button>
            
            
            </div>

            <div><img src="img2.jpeg" alt="" style={{width:"100%" , height:"50%"}} />
            
            <h2>Brandon Keith</h2>
            <h2>Contact : 6541287965</h2>
            <h2>Work : Design-Animator</h2>
            <h2>G-Mail : Brat9@gmail.com</h2>

            <button>Contact</button></div>

        </div>



    </section>
    
    
    </>


        
    )
}

export default Contact