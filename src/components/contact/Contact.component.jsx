import { Handshake } from "@mui/icons-material";
import "./contact.styles.scss"
import { useState } from 'react';
import { spacing } from "@mui/system";

const Contact = () => {

    const [message, setMessage] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setMessage(true)
    }

    return ( 
    <div className="contact" id="contact">
        <div className="left">
            <Handshake className="handshakeIcon"/>
        </div>
        <div className="right">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Email" />
                <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                <button type="submit">Send</button>
                {message && <span>Thanks, I'll reply ASAP. :)</span>}
            </form>
        </div>

    </div> );
}
 
export default Contact;