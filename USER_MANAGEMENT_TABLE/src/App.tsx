import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import  useFetchUsers  from './data';

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading,setLoading]=useState(false)

 
 
  const { getUsers } = useFetchUsers('https://jsonplaceholder.typicode.com/');

  useEffect(() => {
  setLoading(true);
  getUsers('/users')
    .then(data => {
      setUsers(data);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      setLoading(false);
    });
}, []);


  return (
    <div>
      <Container>
        <h1 className='text-center mt-4'>User Management Table</h1>




        <Form>
          <InputGroup className='my-3'>

            {/* onChange for search */}
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search contacts'
            />
          </InputGroup>
        </Form>



        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.name.toLowerCase().includes(search);
              })
              .map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td> <button type="button"
                    className="btn-cookie btn-sm "
                >
                    <i className="fas fa-cookie"></i>
                </button></td>
                </tr>
              ))}
          </tbody>




        </Table>
      </Container>
    </div>
  );
}

export default App;