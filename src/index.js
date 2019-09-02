import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import './index.css';

class App extends React.Component{

    render (){
        return(
            <div className = "container">
                <List title = "♥ TO DO LIST ♥"/>
            </div>
            
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

