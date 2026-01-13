const Navbar = () => {
    return (
        
         <><div
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
            height: '184px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px 50px',
        }}>

            <div style={{
                display: "flex",
                justifyContent: "space-between",
                
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
                        padding: '10px',
                        borderRadius: '5px',
                    }}>
                        <p>bsis.school@gmail.com <br />Feel Free To Mail Us</p>
                    </div>

                    <div />
                    
                </div>

                

                </div>

                </div>

                <div style={{
                        background: "blue"
                    }}> 
                    <h1>Admission Open for 2024-25</h1>
                    </div>
            </div></>
    )
}

export default Navbar