import React from 'react';
import Item from './Item';
import AddNewItem from './AddNewItem';
import './Item.css'

class List extends React.Component{
    
    
    state = {
        tasks: [
            {id:0, done: false, value: 'Make a dinner'},
            {id:1, done: false, value: 'Go for a walk'},
            {id:2, done: false, value: 'Meet with friends'}
        ],
        inputText: ''
    }

    updateInputText = (event) => {
        this.setState({inputText: event.target.value})
    }

    addTask = () => {
        if(this.state.inputText !== ''){
            const list = this.state.tasks
            let newTask = {
                done:false, value: this.state.inputText, id: this.state.tasks.length
            }
            list.push(newTask)
            this.setState({
                tasks: list,
                inputText: ''
            })
        }
    }
    

    doneTask = (id) => {
        let currentTasks = this.state.tasks
        let doneValue = currentTasks.findIndex((task)=>{return task.id===id})
        currentTasks[doneValue] = {done: !currentTasks[doneValue].done, value: currentTasks[doneValue].value, id: currentTasks[doneValue].id}
        this.setState({ tasks: currentTasks})
        
    }

    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                {this.state.tasks.map((task, index) => 
                    <Item   item={task.value} 
                            key={index} 
                            id={task.id}
                            doneTask={this.doneTask}
                            done={task.done}
                    />
                )}
                <AddNewItem 
                            tasks={this.state.tasks} 
                            inputText={this.state.inputText} 
                            addTask={this.addTask} 
                            updateInputText={this.updateInputText}
                />
            </div>
        )
    }
}

export default List;
