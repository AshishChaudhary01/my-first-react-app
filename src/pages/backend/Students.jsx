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
      <h3>This is the Students Content.</h3>
      <table>
        <thead>
          <tr>
            <th>Name:</th>
            <th>Age:</th>
            <th>Major:</th>
            <th>Courses:</th>
          </tr>
        </thead>
        <tbody>
          {
            students.map((student) => {
              return (
                <tr key={student.name}>
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
