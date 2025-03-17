import { useParams } from "react-router-dom"



function User(){

    // let {details,age}=useParams()
    let {id}=useParams()
    return(
        <>

        <h1>This Is User Section</h1>
        {/* <h2>My Name Is {details} and my age is {age} </h2> */}
        <h2>This is from user {id}</h2>
        </>
    )
}

export default User