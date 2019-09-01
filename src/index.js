import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import './index.css';

class App extends React.Component{

    render (){
        return(
            <div className = "container">
                <h2>TO DO LIST</h2>

                <List/>
            </div>
            
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

