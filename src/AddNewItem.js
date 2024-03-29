import React from 'react';
import './AddNewItem.css';

class AddNewItem extends React.Component {
    render(){
        return(
            <div className="addNewItem">
                <input className = "addInput" 
                        type="text" 
                        onChange={this.props.updateInputText}
                        value={this.props.inputText}
                        placeholder={'...add new item :)'}
                        
                />
                <button className = "addButton"  
                        onClick={this.props.addTask}
                > + </button>
            </div>
        )
    }
};

export default AddNewItem;
