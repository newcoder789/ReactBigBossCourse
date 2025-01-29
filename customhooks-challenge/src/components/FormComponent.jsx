// FormComponent.jsx
import React from 'react';
import useInput from './useInput';

const FormComponent = () => {
  const { value: name, onChange: handleNameChange } = useInput('');
  const { value: email, onChange: handleEmailChange } = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
