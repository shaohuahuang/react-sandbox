import React from 'react'
import {Router, Route, browserHistory} from 'react-router'
import {render} from 'react-dom'
import configureStore from './configureStore'
import Root from './components/Root'

const store = configureStore()

render(
    <Root store= {store} />,
    document.getElementById('app')
)

