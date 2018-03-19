import * as actions from '../actions'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import TodoList from './TodoList'
import {getVisibleTodos} from '../reducers'

const mapStateToProps = (state, {params}) => {
    const filter = params.filter || 'all'
    return {
        todos: getVisibleTodos(
            state,
            filter
        ),
        filter
    }
}

class VisibleTodoList extends Component {
    componentDidMount(){
        this.fetchData()
    }

    componentDidUpdate(prevProps){
        if(this.props.filter !== prevProps.filter){
            this.fetchData()
        }
    }

    fetchData(){
        const {filter, fetchTodos} = this.props
        fetchTodos(filter)
    }

    render() {
        const {toggleTodo, ...rest} = this.props
        return <TodoList {...rest} onTodoClick= {toggleTodo}/>
    }
}

VisibleTodoList = withRouter(connect(mapStateToProps, actions)(VisibleTodoList))

export default VisibleTodoList