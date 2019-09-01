import React from 'react';



const Item = (props) => {
    return(
        <div>
            <ul>
                <li>
                    {props.item}
                </li>
            </ul>
        </div>
    )
}

export default Item;