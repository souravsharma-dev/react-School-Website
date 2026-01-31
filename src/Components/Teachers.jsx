import Navbar from "./Navbar";

const Teachers = () => {
    return (

        <div>
            <Navbar />

            <section>
                <div style={
                    {
                        Gap: "60px"
                    }
                }>
                    <img src="teacher-image.jpg" alt="Teacher Image" />
                    <h1>Teachers Name</h1>
                    <p>Subject: Mathematics</p>
                </div>
            </section>
        </div>
    )
}

export default Teachers;