import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

interface SearchPanelProps {
  onSearch: (field: string, value: string) => void;
}

const SearchPanel: React.FC<SearchPanelProps> = ({ onSearch }) => {


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onSearch(name, value);
  };

  
  return (
    <Form>
      <InputGroup className="my-3">
        <Form.Control
          name="name"
          placeholder="Search by Name"
          onChange={handleChange}
        />
        <Form.Control
          name="username"
          placeholder="Search by Username"
          onChange={handleChange}
        />
        <Form.Control
          name="email"
          placeholder="Search by Email"
          onChange={handleChange}
        />
        <Form.Control
          name="phone"
          placeholder="Search by Phone"
          onChange={handleChange}
        />
      </InputGroup>
    </Form>
  );
};

export default SearchPanel;
