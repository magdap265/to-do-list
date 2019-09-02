import React from 'react';



class Item extends React.Component {

    render() {
        return(
            <div>
                <ul>
                    <li>
                        <p  className={this.props.done ? 'doneTask' : ''} 
                            onClick={this.props.doneTask}>
                                {this.props.item}
                        </p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Item;