//@flow

import React from 'react';
import styled, {css} from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Input = styled.input`
  padding: 0.5em;
	margin: 0.5em;
	color: palevioletred;
	background: papayawhip;
	border: none;
	border-radius: 3px;
`

const Button = styled.button`
  background: ${props => props.primary? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};
  font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
`

const TomatoButton = Button.extend`
  color: tomato;
  border-color: tomato
`

const Link = ({className, children}) => (
  <a className={className}>
    {children}
  </a>
)

const StyledLink = styled(Link)`
  color: palevioletred;
	font-weight: bold;
`

const NewInput = styled.input.attrs({
  type: 'password',
  margin: props => props.size || '1em',
  padding: props => props.size || '1em'
})`
	color: palevioletred;
	font-size: 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;

	/* here we use the dynamically computed props */
	margin: ${props => props.margin};
	padding: ${props => props.padding};
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

        <Input placeholder="@mxstbr" type="text" />
        <Input value="@geelen" type="text" />

        <Button>Normal</Button>
        <Button primary>Primary</Button>
        <TomatoButton>Tomato Button</TomatoButton>

        <Link>Unstyled, boring Link</Link>
        <br />
        <StyledLink>Styled, exciting Link</StyledLink>

        <NewInput placeholder="A small text input" size="1em" />
        <br />
        <NewInput placeholder="A bigger text input" size="2em" />
      </div>
    )
  }
}

export default App;