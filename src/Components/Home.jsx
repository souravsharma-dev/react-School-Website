import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => {
    return (
        <div> 
            <Navbar />
            <div>
                <img src="./images/BS International Hero.png" alt="hero banner"
                    style={{
                        width: '100%',
                        height: '550px',
                    }}
                ></img>
            </div>
           
           <div>
            <p>BS International School believes that education is not just about academics, but about shaping confident, responsible, and compassionate individuals. We provide a balanced learning environment where students are encouraged to explore, question, and grow.

                With a strong foundation in values and modern teaching practices, we strive to create lifelong learners prepared for future challenges.</p>
          </div>
                
            <div>
            <p>Though a school can do a lot for a child, it cannot do everything. Home is the first place where education begins and character is shaped. Maximum cooperation between parents and the school is essential for the overall development of the child.</p>
            </div>       

            <div>
                <p>Nurturing Young Minds for a Better and Brighter Tomorrow</p>
            </div>
            
            <div>
            <p>At BS International School, we believe every child is unique and capable of excellence. Our goal is to provide a nurturing environment that fosters intellectual growth, discipline, and strong moral values. Together with parents, we aim to shape confident learners and responsible citizens.</p>
              </div>
                    
            <div>
            <p>A secure and welcoming reception, smart classrooms, well-equipped computer and science labs, a resource-rich library, a spacious playground, and a safe kids’ play zone together create a supportive and engaging learning environment.</p>
            </div>

            <div>
            <h1>For any Queries</h1>
            </div>

            <div>
            <h1>Why Choose BS International School</h1>
            <p>B.S. International School offers a comprehensive education that combines academic excellence with character development. Our experienced faculty, modern infrastructure, and student-centered approach ensure a well-rounded learning experience.</p>
            </div>        

            <Footer />
             </div>
    )
}

export default Home;