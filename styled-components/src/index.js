import React from 'react'
import ReactDOM from 'react-dom'
import {injectGlobal} from 'styled-components'

import App from './App';

ReactDOM.render(<App />, document.getElementById('app'));

injectGlobal`
  body{
    background-color: ghostwhite;
    padding: 0;
    margin: 0;
    font-family: cursive;
  }
`