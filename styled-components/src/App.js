//@flow

import React from 'react';
import styled, {css} from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const num1: number = 35;

class App extends React.Component{
  render(){
    return (
      <div>
        Main Content

        <Title>
          Hello World, this is my first styled component!
        </Title>

        <p>{num1}</p>
      </div>
    )
  }
}

export default App;