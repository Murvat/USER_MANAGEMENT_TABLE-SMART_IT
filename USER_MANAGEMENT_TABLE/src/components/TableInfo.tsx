import React from 'react';


interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

interface TableInfoProps {
  users: User[]; 
}

const TableInfo: React.FC<TableInfoProps> = ({ users }) => {
  return (
    <div>
      <h1 className="text-center mt-4">User Management Table</h1>
      <h2>Total number of users: {users.length}</h2>
    </div>
  );
};

export default TableInfo;
