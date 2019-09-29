import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const CustomElement = styled.div`
    color: green;
    font-size: 30px;
`;

function App() {
  return (
      <CustomElement>
        hello
      </CustomElement>
  );
}

export default App;
