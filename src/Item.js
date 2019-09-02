import React from 'react';



class Item extends React.Component {

    render() {
        return(
            <div>
                <ul>
                    <li>
                        {this.props.item}
                    </li>
                </ul>
            </div>
        )
    }
}

export default Item;