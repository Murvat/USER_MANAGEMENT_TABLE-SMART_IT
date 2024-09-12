import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

interface SearchPanelProps {
  onHandleChange: (term: string) => void;
}

const SearchPanel: React.FC<SearchPanelProps> = ({ onHandleChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onHandleChange(e.target.value);
  };

  return (
    <Form>
      <InputGroup className="my-3">
        <Form.Control
          placeholder="Search Users"
          onChange={handleChange}
        />
      </InputGroup>
    </Form>
  );
};

export default SearchPanel;
