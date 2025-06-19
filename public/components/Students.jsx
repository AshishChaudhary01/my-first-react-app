const Students = () => {
  const students = [
    {
      name: "AOA",
      age: 18,
      major: "Computer Science",
      courses: ["Data Structure", "Algorithm", "Web Development"], 
    },
    {
      name: "BOB",
      age: 20,
      major: "Physics",
      courses: ["Thermo dynamics", "Aero dynamics"], 
    },
    {
      name: "COC",
      age: 22,
      major: "Bio Chemestry",
      courses: ["Plants", "Animals"],
    },
  ]

  return (
    <>
    <table>
      <thead>
        <th>Name:</th>
        <th>Age:</th>
        <th>Major:</th>
        <th>Courses:</th>
      </thead>
      <tbody>
        {
          students.map((student) => {
            return (
              <tr>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.major}</td>
                <td>{student.courses.join(", ")}</td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
    </>
  );
}

export default Students;
