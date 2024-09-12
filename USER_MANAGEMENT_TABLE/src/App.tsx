import  { useEffect, useState } from 'react';
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
  
  const [nameSearch, setNameSearch] = useState<string>('');
  const [usernameSearch, setUsernameSearch] = useState<string>('');
  const [emailSearch, setEmailSearch] = useState<string>('');
  const [phoneSearch, setPhoneSearch] = useState<string>('');

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleSearch = (field: string, value: string) => {
    switch (field) {
      case 'name':
        setNameSearch(value);
        break;
      case 'username':
        setUsernameSearch(value);
        break;
      case 'email':
        setEmailSearch(value);
        break;
      case 'phone':
        setPhoneSearch(value);
        break;
      default:
        break;
    }
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
        <SearchPanel onSearch={handleSearch} />
        <Table striped bordered hover>
          <TableHead />
          <TableBody
            users={users}
            filters={{ name: nameSearch, username: usernameSearch, email: emailSearch, phone: phoneSearch }}
            onDelete={handleDelete}
          />
        </Table>
      </Container>
    </div>
  );
}

export default App;
