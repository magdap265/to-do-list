import React from 'react';
import './AddNewItem.css';

class AddNewItem extends React.Component {
    constructor(props){
        super(props)
            this.state = {
            inputText: ''
        }    
    }
    
    updateInputText = (event) => {
        this.setState({inputText: event.target.value})
    }

    render(){
        return(
            <ul>
                <li>
                    <input className = "addInput" type="text" placeholder="New Item... :)" onChange={this.updateInputText}/>
                    <button className = "addButton" onClick={this.props.addTask}> + </button>
                </li>
            </ul>
        )
    }
};

export default AddNewItem;
