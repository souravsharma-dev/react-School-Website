import Navbar from "./Navbar";

const teachers = [
    {
        image: "./teachers/teacher1.jpg",
        name: "John Doe",
        subject: "Mathematics"
    },
    {
        image: "./teachers/teacher2.jpg",
        name: "Jane Smith",
        subject: "Science"
    },
    {
        image: "./teachers/teacher3.jpg",
        name: "Robert Johnson",
        subject: "History"
    },
     {
        image: "./teachers/teacher4.jpg",
        name: "Ayush Aggarwal",
        subject: "Social Science"
    },
     {
        image: "./teachers/teacher5.jpg",
        name: "Roshni Roy",
        subject: "English"
    }
]

const Teachers = () => {
    return (

        <div>
            <Navbar />
            


            <section
            style={{
                width: "80%",
                padding: '50px',
                display: 'flex',
                gap: '20px'
            }}>
                {
                    teachers.map(function (item,index){ 
                        return (
                            <div key={index} style={{
                                width: "20%",
                            }}>
                           <img src={item.image} alt={item.image} style={
                            {
                                height: '250px',
                                width: '250px',
                                alignSelf: "cente"
                            }
                           } />
                           <h1>{item.name}</h1>
                           <p style={{
                            color: 'white',
                            background: 'orange'
                            
                           }}>{item.subject} </p>
                           </div>
                        )
                    })
                }

            </section>
        </div>
    )
}

export default Teachers;