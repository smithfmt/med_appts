const doctors = [
    {
        name: "James Doe",
        special: "Dentist",
        review: "",
    },
    {
        name: "Jaou Rouge",
        special: "Cardiology",
        review: "",
    }
]

const ReportsLayout = () => {
    return (
        <div className="form-container">
            <h1>Reports</h1>
            <table>
                <tr>
                    <th>Serial Number</th>
                    <th>Doctor Name</th>
                    <th>Doctor Speciality</th>
                    <th>Provide Feedback</th>
                    <th>Review Given</th>
                </tr>
                {doctors.map((doctor, index) => {
                    return (
                        <tr>
                            <td>{index}</td>
                            <td>Dr. {doctor.name}</td>
                            <td>{doctor.special}</td>
                            <td><button onClick={() => {}}>View Report</button></td>
                            <td><button onClick={() => {}}>Download Report</button></td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
};

export default ReportsLayout;