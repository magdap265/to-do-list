import React from 'react';
import Item from './Item';
import AddNewItem from './AddNewItem';
import './item.css'


class List extends React.Component{
    state = {
        tasks: ['Make a dinner',
                'Go for  walk',
                'Meet with friends'],
        inputText: '',
        done: false
    }

    updateInputText = (event) => {
        this.setState({inputText: event.target.value})
    }

    addTask = () => {
        if(this.state.inputText !== ''){
            const list = this.state.tasks
            list.push(this.state.inputText)
            this.setState({
                tasks: list,
                inputText: ''
            })
        }
    }

    doneTask = () => {
        this.setState({done: !this.state.done})
        console.log(this.state.done)
    }

    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                {this.state.tasks.map((task, index) => 
                    <Item 
                        item={task} 
                        key={index} 
                        doneTask={this.doneTask}
                        done={this.state.done}
                    />
                )}
                <AddNewItem tasks={this.state.tasks} 
                            inputText={this.state.inputText} 
                            addTask={this.addTask} 
                            updateInputText={this.updateInputText}
                />
            </div>
        )
    }
}

export default List;
