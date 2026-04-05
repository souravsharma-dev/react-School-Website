import {useState} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactUs = () => {

    const [Fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [Message, setMessage] = useState("");


    return (
        <div >
            <Navbar />

            <div style={{
                    display: 'flex', 
                    padding: 50,
                    gap: 50,
                    }}>
            <img style={{
                backgroundColor: 'grey',
                width: '400px',
                height: '400px',
                borderRadius: '50px',
                padding: '20px',
            }} src="./images/contact us.svg" alt="Contact Us" />

            <div style={{
                backgroundColor: '#f2f2f2',
                width: "50%",
            }}>   
                <form style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 20,
                    gap: 20,
                }}>

                  <div style={{
                    display: "flex",
                    flexDirection: 'column',
                    gap: 8,
                  }}>
                <label style={{
                    fontSize: 16,
                    fontWeight: 450
                }}>Full Name</label>
                <input 
                onChange={(e)=>setFullname(e.target.value)}
                name="fullname"
                required
                type='text'
                placeholder="Enter Your Full Name"
                style={{
                    padding: 10,
                    border: ' 1px solid #ccc',
                    borderRadius: 5
                }}>

                </input>


                </div>  

                 <div style={{
                    display: "flex",
                    flexDirection: 'column',
                    gap: 8,
                  }}>
                <label style={{
                    fontSize: 16,
                    fontWeight: 450
                }}>Email</label>
                <input 
                onChange={(e)=>setEmail(e.target.value)}
                name="email"
                required
                type='email'
                placeholder="Enter Your Email"
                style={{
                    padding: 10,
                    border: ' 1px solid #ccc',
                    borderRadius: 5
                }}>
                </input>

                
                </div>  

                  <div style={{
                    display: "flex",
                    flexDirection: 'column',
                    gap: 8,
                  }}>
                <label style={{
                    fontSize: 16,
                    fontWeight: 450
                }}>Message</label>
                <textarea
                onChange={(e)=>setMessage(e.target.value)}
                name="Message"
                required
                type='textarea'
                placeholder="Enter Your Message"
                rows= {4}
                style={{
                    padding: 10,
                    border: ' 1px solid #ccc',
                    borderRadius: 5,
                }}>
                </textarea>

                <button 
                type="Submit"
                style={{
                    color: "white",
                    backgroundColor: "black",
                    padding: "8px 15px",
                    borderRadius: 4,
                    width: 'fit-content',
                    fontWeight: 600,
                    fontSize: 16,
                }}> Submit </button>

                
                </div>  

                </form>

                 {Fullname}
                 {email}
                 {Message}
                
            </div>

            </div>

               <Footer/>  
        </div>
    )
}

    export default ContactUs;