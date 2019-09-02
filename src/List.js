import React from 'react';
import Item from './Item';
import AddNewItem from './AddNewItem';


class List extends React.Component{
    state = {
        tasks: ['Make a dinner',
                'Go for  walk',
                'Meet with friends']
    }

    addTask = () =>{
        const list = this.state.tasks
        list.push(this.state.inputText)
        this.setState({tasks: list})
        console.log()
    }

    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                {this.state.tasks.map((task, index) => <Item item = {task} key={index}/>)}
                <AddNewItem tasks={this.state.tasks} addTask={this.addTask}/>
            </div>
        )
    }
}

export default List;
