import React, { Component } from 'react';
import plus from '../plus.svg';

class AddForm extends Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addToDo(this.state);
        this.setState({
            content: ''
        })

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h5>Ajoutez une nouvelle tache : </h5>
                <div className="titre-ajouter">
                    <img className="hvr-wobble-vertical" src={plus} alt=""/>
                    <input type="text" onChange={this.handleChange} value={this.state.content}/>
                </div>
            </form>
        );
    }
}
export default AddForm;


