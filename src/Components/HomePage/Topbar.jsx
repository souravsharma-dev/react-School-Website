const Topbar = () => {
return(
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
            gap: '3px'
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
)
}

export default Topbar;