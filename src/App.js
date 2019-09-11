import React from 'react';
import List from './List';

class App extends React.Component{
    MyTasks = [
        {done: false, task: 'Make a dinner'},
        {done: false, task: 'Go for  walk'},
        {done: false, task: 'Meet with friends'}
    ]
    render (){
        return(
            <div className = "container">
                <List title = "♥ TO DO LIST ♥" />
            </div>
            
        )
    }
}

export default App;
