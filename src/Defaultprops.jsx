
function Student({ name = "Unknown", age = 22 }) {
  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default Student;
