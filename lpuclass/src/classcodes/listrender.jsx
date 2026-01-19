function ListRender() {
  const students = ["Rohit", "Amit", "Neha"];

  return (
    <div>
      <h2>Student List</h2>

      <ul>
        {students.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListRender;
