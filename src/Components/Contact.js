import {useState} from "react"

function Contact() 
{
    const [name,setName] = useState("Purnansh");

    const handleClick = () => {
        setName("Abhimanyu")
    }
    return(
        <div>
            <h1>Contact Component</h1>
            <h2>The owner of this page is {name}</h2>
            <button onClick = {handleClick}>Change Owner</button>
        </div>
    )
}
export default Contact;