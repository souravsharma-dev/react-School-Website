import {Link} from 'react-router-dom';

const Footer = () => {
    return (

        // Footer Section
        <div style={{
            display: 'flex',
            width: '100%',
            height: '771.489px',
            padding: '150px 50px 20px 50px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '50px',
            backgroundColor: '#1B2945',
            color: 'white',
        }}>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                justifyContent: 'center',
            }}>
        {/* BS International School Logo and Description */}
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start',
            height: '69px',
            gap: '10px',
        }}>
            <img src="./images/logo.png" alt="school logo" style={{
                width: '69px',
                aspectRatio: '1/1',
                borderRadius: '50px'
            }} />

            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
            }}> 

            <h1 style={{  
                fontFamily: 'Roboto',
                fontSize: '50px',
                fontStyle: 'normal',
                lineHeight: 'short',
                }}>
                    BS </h1>

                <p style={{
                    /* Text Medium - 16 */
                    fontFamily: 'Roboto',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: 'normal',
                }}>International School</p>
                </div>
      
                    </div>

                    {/* About school */}
                  <p>A school with the right environment goes a long way in shaping the life of a student. 
                    The great efforts and sacrifices are involved in establishing and maintaining a high quality institution.</p>
                   
                </div>

                {/* Footer link Section */}
                <div style={{
                }}>
                    <h1 style={{
                        borderBottom: "2px solid #F32929"
                    }}>QUICK LINKS</h1>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                    }}>
                        <Link to="/" style={{
                        textDecoration: 'none',
                        color: 'white'
                        }}>Home</Link>
                        <Link to="/about" style={{
                        textDecoration: 'none',
                        color: 'white'
                        }}>About BS International</Link>
                        <Link to="/facilities" style={{
                        textDecoration: 'none',
                        color: 'white'
                        }}>Facilities</Link>
                        <Link to="/admission" style={{
                        textDecoration: 'none',
                        color: 'white'
                        }}>Admission</Link>
                    </div>
                </div>
        </div>
    )
}   
export default Footer;