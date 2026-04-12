import Navbar from "./Navbar";

const SchoolEvents = () =>{

    const events = [
        {
            name: 'Science Fair',
            date: '2024-07-15',
            time: '10:00 AM - 2:00 PM'
        },
        {
            name: 'Maths Fair',
            date: '2024-07-15',
            time: '10:00 AM - 2:00 PM'
        },
        {
            name: 'SocialScience Fair',
            date: '2024-07-15',
            time: '10:00 AM - 2:00 PM'
        },
        {
            name: 'English Fair',
            date: '2024-07-15',
            time: '10:00 AM - 2:00 PM'
        },
    ]

    return (
        <div>
            <Navbar />

            <div
            style={{
                width: '60%',
                margin: '0 auto',
                padding: '64px 0'
            }}>
            <h1 style={{
                textAlign:'center'

            }}>Upcoming School Events Component</h1>

            <table width= "100%">
                <thead>
                    <tr style={{
                        background: '#ddd',
                        padding: '40'
                    }}>
                        <th>Sr No.</th>
                    <th style={{padding:8}}>Upcoming Event</th>
                    <th>Date</th>
                    <th>Time</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        events.map((event, index) => (
                            <tr style={{
                                textAlign: "center"
                            }}>
                                <td style={
                                    {
                                        padding: 12, border: '1px solid #ccc'
                                    }}>{index+1}</td>
                                <td style={{
                                    padding: 12, border: '1px solid #ccc'
                                }}>{event.name}</td>
                                <td style={{
                                    padding: 12, border: '1px solid #ccc'
                                }}>{event.date}</td>
                                <td style={{
                                    padding: 12, border: '1px solid #ccc'
                                }}>{event.time}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
            </div>

        </div>
    )
}

export default SchoolEvents;