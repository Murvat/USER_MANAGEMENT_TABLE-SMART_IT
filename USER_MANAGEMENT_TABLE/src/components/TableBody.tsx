import React from 'react';
import UserRow from './UserRow';
import { User } from '../types/User';



interface TableBodyProps {
  users: User[];
  filters: {
    name: string;
    username: string;
    email: string;
    phone: string;
  };
  onDelete: (id: number) => void;
}

const TableBody: React.FC<TableBodyProps> = ({ users, filters, onDelete }) => {
  const { name, username, email, phone } = filters;

  const filteredUsers = users.filter((user) => {
    return (
      (name === '' || user.name.toLowerCase().includes(name.toLowerCase())) &&
      (username === '' || user.username.toLowerCase().includes(username.toLowerCase())) &&
      (email === '' || user.email.toLowerCase().includes(email.toLowerCase())) &&
      (phone === '' || user.phone.toLowerCase().includes(phone.toLowerCase()))
    );
  });

  return (
    <tbody>
      {filteredUsers.map((user) => (
        <UserRow
          key={user.id}
          data={user}
          onDelete={() => onDelete(user.id)}
        />
      ))}
    </tbody>
  );
};

export default TableBody;
