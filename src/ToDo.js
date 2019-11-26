import React from 'react'
import {connect} from 'react-redux'
import { addTodO,Delete, Complete, Edit } from './Actions/actions'
import uuid from 'uuid'

class ToDo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input:'',
            complete: false,
            todos: [],
            id: uuid()
        }
    }
    handleChange = e => {
        this.setState({input: e.target.value})
    }
  
    render() {
        return (
            <div>
                <h1>To-Do App!</h1>
                <p > Add New To-Do</p>
                <input type="text" onChange={this.handleChange} value={this.state.input}/>
                <button onClick={() => this.props.toDos.filter(el => el.editing === true).length === 0 ?  this.props.add({input: this.state.input, complete: this.state.complete, id: uuid() }) : this.props.toDos.map(el => el.editing === true && this.props.edit({...el, input: this.state.input})) }>
                    Add
                </button>
                <div className="todo-list">
                    {
                        this.props.toDos.map((el , i) => (
                            <div className="todo-item">
                                <button onClick={() => this.props.complete(el.id)}>{el.complete ? 'Undo' : 'Complete'}</button>
                                <button onClick={()=> this.props.edit(el) }> Edit</button>
                                <button onClick={() => this.props.delete(el.id)}>Delete</button>
                                <h3 className={el.complete ? 'Crossed' : undefined}>{el.input}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        toDos: state.ToDoReducer
    }
}
const mapDispatchToprops = dispatch => {
    return{
        add: x => dispatch(addTodO(x)),
        delete: x => dispatch(Delete(x)),
        complete: x => dispatch(Complete(x)),
        edit: x => dispatch(Edit(x))
    }
}
export default connect(mapStateToProps, mapDispatchToprops)(ToDo)