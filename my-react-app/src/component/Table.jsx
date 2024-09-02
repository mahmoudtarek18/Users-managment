import data from "../../data.json";
const Table = () => {
  console.log(data);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Teams</th>
          <th>Access</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user, index) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.teams}</td>
            <td>{user.access}</td>
          </tr>
        ))}
        <tr>
          <td>John Doe</td>
          <td>30</td>
          <td>Male</td>
        </tr>
        <tr>
          <td>Jane Smith</td>
          <td>28</td>
          <td>Female</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="3">Total Records: 2</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
