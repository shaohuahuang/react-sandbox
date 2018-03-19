import React from 'react'
import {Provider} from 'react-redux'
import App from './App'
import {Router, Route, browserHisotry} from 'react-router'


const Root = ({store}) => (
    <Provider store = {store}>
        <Router history={browserHisotry}>
            <Route path="/(:filter)" component={App}/>
        </Router>
    </Provider>
)

export default Root