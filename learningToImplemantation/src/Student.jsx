import Subject from "./Subject";

function Student() {
    return (
        <div style={{ backgroundColor: "red", padding: "50px" }}>
            <h1>Student Component</h1>
            <Subject />
        </div>
    )
}

export default Student;