import React from 'react';
import UserRow from './UserRow';
import { User } from '../types/User';



interface TableBodyProps {
  users: User[];
  search: string;
  onDelete: (id: number) => void;
}

const TableBody: React.FC<TableBodyProps> = ({ users, search, onDelete }) => {
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <tbody>
      {filteredUsers.map((user) => (
        <UserRow
          key={user.id}
          data={user}
          onDelete={onDelete}
        />
      ))}
    </tbody>
  );
};

export default TableBody;
