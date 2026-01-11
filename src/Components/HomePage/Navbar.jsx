const Navbar = () => {
    return (
        
        <div style={{
            height: '184px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
             padding: '20px 50px',
        }}>
            
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',

            }}>
            <img src="./images/logo.png" alt="school logo"/>
            <h1>BS International School</h1>
            </div>

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
            }}>
                <p>9718311000 <br />9205501961</p>
            </div>
           
            <div/>
        </div>
        </div>
    )
}

export default Navbar