import React from 'react';
import './AddNewItem.css';

class AddNewItem extends React.Component {
    
    render(){
        return(
            <ul>
                <li>
                    <input className = "addInput" type="text" placeholder="New Item... :)"></input>
                    <button className = "addButton"> + </button>
                </li>
            </ul>
        )
    }
};

export default AddNewItem;
