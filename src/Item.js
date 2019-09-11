import React from 'react';
import './Item.css';



class Item extends React.Component {
    state={
        click: false,
        value: this.props.item
    }
    //the function isn't currently use in this projest
    changeTask = (event) => {
        console.log(event.target.value)
        this.setState({value: event.target.value})
    }

    //the function isn't currently use in this projest
    handleKeyPress = (event) => {
        if(event.key == 'Enter'){
        this.setState({click: false, value: event.target.value})
        }

        this.changeTask(event)
    }
    //the function is not finish yet and it isn't currently use in this project
    editTask = () =>{   
        if (this.state.click == true){
            document.getElementsByTagName("p").innerHTML = <input type="text" value={this.state.value}
                                                                onKeyPress={this.handleKeyPress}></input>
        }
        this.setState({click: true})
        console.log(this.state.click)
    }

    render() {
        return(
            <div>
                <div className="task">
                    <div className="check edit-list"
                        onClick={()=> this.props.doneTask(this.props.id)}>
                        <i className={this.props.done ? 'icon-check' : 'icon-check-empty'}></i>
                    </div>
                    <div className="item edit-list">
                        {/* onDoubleClick={this.editTask} */}
                        {!this.state.click && (<p  className={this.props.done ? 'doneTask' : '' }>
                                {this.props.item}
                        </p>)}
                        {this.state.click && (<input value={this.props.item}/>)}
                    </div>
                    {/*  this element is comment becouse the function to delete task isn't exist yet
                    <div className="cancel edit-list">
                        <i className="icon-cancel"></i>   
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Item;