import React from 'react';
import UserRow from './UserRow';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

interface TableBodyProps {
  users: User[];
  search: string;
}

const TableBody: React.FC<TableBodyProps> = ({ users, search }) => {
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

    return (
      
    <tbody>
      {filteredUsers.map((user) => (
        <UserRow key={user.id} data={user} />
      ))}
    </tbody>
  );
};

export default TableBody;
