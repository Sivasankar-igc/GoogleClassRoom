export default ({ assignments, setCurrentState, setCurrentAssignment }) => {

    return (
        <div>
            <select onChange={(e) => {
                const data = assignments.find(assignment => assignment.assignment === e.target.value)
                setCurrentAssignment(data)
                setCurrentState();
            }}>
                <option value="">Assignment</option>
                {
                    assignments.map(assignment => (
                        <option key={assignment._id} value={assignment.assignment}>{assignment.assignment}</option>
                    ))
                }
            </select>
        </div>
    )
}