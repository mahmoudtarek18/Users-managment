import data from "../../data.json";
import { Types } from "../types";
import deleteIcon from "/delete.svg";
import arrowIcon from "/arrow.svg";
import { useState } from "react";

const UsersTable = () => {
  const [filteredUsers, setFilteredUsers] = useState(data);

  const deleteUser = (index: number) => {
    const updatedUsers = [...filteredUsers];
    updatedUsers.splice(index, 1);
    setFilteredUsers(updatedUsers);
  };

  return (
    <div className="table-wrapper">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>
                <span>Email</span>
                <img src={arrowIcon} alt="arrow" />
              </th>
              <th>
                <span>Teams</span>
                <img src={arrowIcon} alt="arrow" />
              </th>
              <th>
                <span>Access</span>
                <img src={arrowIcon} alt="arrow" />
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user.id}>
                <td>
                  <div className="user-info">
                    <img src={user.image} alt={user.name} />
                    <h2>{user.name}</h2>
                    {user.type !== Types.User && (
                      <span className="role">{Types[user.type]}</span>
                    )}
                  </div>
                </td>
                <td className="email">{user.email}</td>
                <td className="teams">{user.teams}</td>
                <td className="access">
                  {user.access.map((access) => (
                    <span key={access}>{access}</span>
                  ))}
                </td>
                <td>
                  <button onClick={() => deleteUser(index)}>
                    <img
                      src={deleteIcon}
                      className="delete-icon"
                      alt="delete"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
