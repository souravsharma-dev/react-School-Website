import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        
         <>
         <div
            style={{
                display: 'flex',
                backgroundColor: '#1B2945',
                color: 'white',
                height: '40px',
                fontSize: '12px',
                paddingRight: '120px',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-end',
                gap: '8px',
                alignSelf: 'stretch'
            }}>

            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}>
                <p>Plot No-26, Dalip Vihar, Chander Vihar, Nilothi Extension, Nangloi, Delhi – 110041 </p>

                <p
                    style={{
                        color: 'white',
                        fontSize: '25px',
                        gap: '10px',
                        paddingBottom: '5px'
                    }}>|</p>

                <img src="./images/facebookicon.png" alt="phone icon" style={{
                    backgroundColor: 'white',
                    display: 'flex',
                    width: '7px',
                    height: '14px',
                    padding: '5px 8px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '20px',
                    gap: '10px'
                }} />
            </div>
        </div>
        
        {/* Main Navbar Section */}
         
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px 50px',
        }}>

            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: '100%',
                height: '65px',
                
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                }}>
                    <img src="./images/logo.png" alt="school logo" />
                    <h1>BS International School</h1>
                </div>

                {/* Contact Info Section */}

                <div style={{
                    display: 'flex'
                }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                }}>

                    <img src="./images/phoneicon.png" alt="phone icon" />

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        fontSize: '20px',
                        padding: '10px',
                    }}>
                        <p>9718311000 <br />9205501961</p>
                    </div>

                    <div />
                </div>

                      <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                }}>

                    <img src="./images/Mail.png" alt="phone icon" />

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        fontSize: '20px',
                        padding: '130px',
                        borderRadius: '50px',
                    }}>
                        <p>bsis.school@gmail.com <br />Feel Free To Mail Us</p>
                    </div>

                    <div />
                    
                </div>

                

                </div>

                </div>

            </div>
            

                    {/* Navigation Links */}
             <div style={{
                        display: "flex",
                        padding: "20px 50px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: '#1B2945',
                        textDecoration: 'none',
                        }}> 

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            /* Text Medium - 16 */
                            fontFamily: 'Roboto',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: 'normal',
                        }}>
                   <Link to='/' style={
                    {
                        textDecoration: "none",
                    color: 'white'
                }
                   }>Home </Link>
                   <Link to='/AboutUs' style={
                    {
                        textDecoration: "none",
                    color: 'white'
                }
                   }>About Us</Link>
                   <Link to='/facilities' style={
                    {
                        textDecoration: "none",
                    color: 'white'
                }
                   }>Facilities</Link>
                   <Link to='/admission'style={
                    {
                        textDecoration: "none",
                    color: 'white'
                }
                   }>Admission</Link>
                   <Link to='/schoolevents'style={
                    {
                        textDecoration: "none",
                    color: 'white'
                }
                   }>School Events</Link>
                   <Link to='/docs'style={
                    {
                        textDecoration: "none",
                        borderRadius: '5px',
                    color: 'white'
                }
                   }>Docs</Link>
                    </div>

                   <Link to='/contactus' className="contact-btn" style={
                    {
                        textDecoration: "none",
                        fontSize: '16px',
                    color: 'white',
                    padding: '10px 20px',
                    backgroundColor: '#F95F08',
                    borderRadius: '5px',
                }
                   }>Contact Us</Link>
                    </div>
                   
                    </>
    )
}

export default Navbar