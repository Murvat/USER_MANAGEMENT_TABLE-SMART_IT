import React from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}


interface UserRowProps {
  data: User; 
}

const UserRow: React.FC<UserRowProps> = ({ data }) => {
  const { name, id, username, email, phone } = data;

  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
        <button type="button" className="btn-cookie btn-sm">
          <i className="fas fa-cookie"></i>
        </button>
      </td>
    </tr>
  );
};

export default UserRow;

