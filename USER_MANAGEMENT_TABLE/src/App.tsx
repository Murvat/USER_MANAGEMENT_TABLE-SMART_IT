import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
import TableHead from './components/TableHead';
import TableInfo from './components/TableInfo';
import SearchPanel from './components/SearchPanel';
import TableBody from './components/TableBody';
import useFetchUsers from './gateway/useFetchUsers';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

function App() {

  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>(''); 

  const { getUsers } = useFetchUsers('https://jsonplaceholder.typicode.com/');

  useEffect(() => {
    setLoading(true);
    getUsers('/users')
      .then((data: User[]) => {
        setUsers(data);
      })
      .catch((err: any) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


  const handleSearch = (term: string) => {
    setSearch(term);
  };


  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div>
      <Container>
        <TableInfo users={users} />
        <SearchPanel onHandleChange={handleSearch} />
        <Table striped bordered hover>
          <TableHead />
          <TableBody
            search={search} 
            users={users} />
        </Table>
      </Container>
    </div>
  );
}

export default App;
