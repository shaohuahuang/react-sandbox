// import React, {Component} from "react"
// import ReactDOM from "react-dom"
// import {Provider, connect} from 'react-redux'
//
//

//

//
//
// // const todoApp = (state = {}, action) => {
// //     return {
// //         todos: todos(state.todos, action),
// //         visibilityFilter: visibilityFilter(
// //             state.visibilityFilter, action
// //         )
// //     }
// // }
//
// import {createStore, combineReducers} from 'redux'
//
//
// const todoApp = combineReducers({
//     todos,
//     visibilityFilter
// })
// let nextTodoId = 0
//
// const Todo = ({
//                   onClick,
//                   completed,
//                   text
//               }) => (
//     <li onClick={onClick}
//         style={{
//             textDecoration: completed? 'line-through': 'none'
//         }}
//     >
//         {text}
//     </li>
// )
//

//
// const AddTodo = () => {
//     let input
//     return <div>
//         <input ref={node => {
//             input = node
//         }} />
//         <button onClick={() => {
//             store.dispatch({
//                 type: "ADD_TODO",
//                 id: nextTodoId++,
//                 text: input.value
//             })
//
//             input.value = ''
//         }
//         }>
//             Add Todo
//         </button>
//
//     </div>
// }
//
//
// ReactDOM.render(
//     <Provider store={createStore(todoApp)}>
//         <TodoApp />
//     </Provider>,
//     document.getElementById("app")
// )
import React from 'react'
import Footer from './Footer'
import AddTodo from './AddTodo'
import VisibileTodoList from './VisibleTodoList'

const App = () => (
    <div>
        <AddTodo/>
        <VisibileTodoList />
        <Footer/>
    </div>
)












