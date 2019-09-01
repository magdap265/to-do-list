import React from 'react';
import Item from './Item';
import AddNewItem from './AddNewItem';


class List extends React.Component{
    state = {
        item1: 'Make a dinner',
        item2: 'Go for  walk',
        item3: 'Meet with friends'
    }
    render(){
        return(
            <div>
                <Item item = {this.state.item1}/>
                <Item item = {this.state.item2}/>
                <Item item = {this.state.item3}/>
                <AddNewItem/>
            </div>
            
        )
    }
}

export default List;
