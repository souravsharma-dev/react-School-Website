import {Link} from 'react-router-dom';

const Footer = () => {
    return (
       
        
        <div
        style={{
            display: 'flex',
            height: '771.489px',
            padding: '150px 50px 20px 50px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '50px',
            backgroundColor: '#1B2945', }}>

        <div style={{
            paddingTop: 80,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '50px',
            alignSelf: 'stretch',
        }}>
            <div style={{
                display: 'flex',
                width: '1200px',
                justifyContent: 'space-between',
                alignItems: 'flex-start'}}> 

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '30px',
                    alignSelf: 'stretch',
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                    }}>
                    <img src="/images/logo.png" alt="Logo" style={{ 
                        width: '50px', 
                        height: '50px',
                        borderRadius: '50px' }} />

                        <h1 style={{
                            fontSize: '50px',
                            color: '#FFFFFF',
                            borderBottom: '2px solid #FFFFFF',
                        }}>BS</h1>

                        <p style={{
                            fontSize: '16px',
                            color: '#FFFFFF'
                        }}>International School</p>

                        </div>

                        <p style={{
                            fontSize: '16px',
                            color: '#FFFFFF',
                            width: '100%'
                        }}>A school with the right environment goes a long way in 
                        shaping the life of a student. The great efforts and 
                        sacrifices are involved in establishing and maintaining a 
                        high quality institution.</p>


                </div>

                <div
                style={{
                     color: '#FFFFFF',
                }}>
                        <h1 style={{
                    fontSize: '16px',
                    fontWeight: 'Medium'
                }}>Quick Links</h1>
                <hr style={{
                    Color: "000000"
                }}></hr>
                
                <p><img src='/images/icon.png' alt='Home Icon' /> Home</p>
                 <p> <img src='/images/icon.png' alt='Home Icon' /> About BS International</p>
                  <p> <img src='/images/icon.png' alt='Home Icon' /> Facilities</p>
                   <p> <img src='/images/icon.png' alt='Home Icon' />Admission</p>
                </div>

                <div>

                </div>
                            
            </div>


        </div>  

        </div>

        
      
     )
    }   
export default Footer;