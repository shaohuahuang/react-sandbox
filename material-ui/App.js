import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from "react-tap-event-plugin"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
injectTapEventPlugin()

const App = () => (
    <MuiThemeProvider>
      <MyAwesomeReactComponent/>
    </MuiThemeProvider>
)

ReactDOM.render(
  <App />, document.getElementById('app')
)