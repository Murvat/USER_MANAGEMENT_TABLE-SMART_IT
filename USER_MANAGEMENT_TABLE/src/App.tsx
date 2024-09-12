import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
import TableHead from './components/TableHead';
import TableInfo from './components/TableInfo';
import SearchPanel from './components/SearchPanel';
import TableBody from './components/TableBody';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, deleteUser } from './store/userSlice';
import { RootState, AppDispatch } from './store/index';

function App() {
  const dispatch: AppDispatch = useDispatch();
  const { users, loading } = useSelector((state: RootState) => state.users);
  const [search, setSearch] = React.useState<string>('');

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleSearch = (term: string) => {
    setSearch(term);
  };

  const handleDelete = (id: number) => {
    dispatch(deleteUser(id));
  };

  if (loading) {
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
            users={users}
            onDelete={handleDelete} 
          />
        </Table>
      </Container>
    </div>
  );
}

export default App;
