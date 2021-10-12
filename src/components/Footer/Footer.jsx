import '../../styles/Footer.css'
import { db } from '../../service/getFirebase';
import { useState } from 'react';
import { addDoc, collection } from '@firebase/firestore';

function Footer(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();

        const newMessageRef = collection(db, "messages");
        const newMessage = {
            name: name,
            email: email,
            message: message
        }; await addDoc(newMessageRef, newMessage);
        
        alert(newMessage.name + ', your message has been sent!');
        setName('');
        setEmail('');
        setMessage('');
    };

    return(
        <footer>
            <ul className='footerSocials'>
                <h2>Social Media</h2>
                <a href="/" className="footerSocialSection">
                    <i className="fab fa-twitter fa-lg"/>
                    <p>@Placeholder</p>
                </a>
                <a href="/" className="footerSocialSection">
                    <i className="fab fa-instagram fa-lg"/>
                    <p>@Placeholder</p>
                </a>
                <a href="/" className="footerSocialSection">
                    <i className="fas fa-coffee fa-lg"/>
                    <p>@Placeholder</p>
                </a>
            </ul>
            <div className="footerContact">
                <h2>Business Contact</h2>
                <span className="footerContactSection">
                    <i className="fab fa-whatsapp fa-lg"/>
                    <p>+XX-XX-XXXX-XXXX</p>
                </span>
                <span className="footerContactSection">
                    <i className="fab fa-discord fa-lg"/>
                    <p>@Placeholder#XXXX</p>
                </span>    
            </div>
            <form className="footerForm" onSubmit={handleSubmit}>
                <div className="formSection">
                    <label>Name:</label>
                    <input 
                        type="text" 
                        placeholder="Your name..." 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <label>Email:</label>
                    <input
                        type="text" 
                        placeholder="Your email..." 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input 
                        className="footerSection-submit" 
                        type="submit" 
                        value="Submit" 
                    />
                </div>
                <div className="formSection">
                    <label>Message:</label>
                    <textarea 
                        placeholder="Your message here..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        cols="30" 
                        rows="9"
                        required
                    />
                </div>
            </form>
        </footer>
    );
}; export default Footer;