import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => {
    return (
        <div> 
            <Navbar />
            //Hero Banner
            <div>
                <img src="./images/BS International Hero.png" alt="hero banner"
                    style={{
                        width: '100%',
                        height: '550px',
                    }}
                ></img>
            </div>
            <Footer />
             </div>
    )
}

export default Home;