import React, { Component } from 'react';
import './App.css';
import Todos from './Components/Todos';
import AddForm from './Components/AddForm';



class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        content: "Faire les courses"
      },
      {
        id: 2,
        content: "Acheter 2L de lait"
      },
      {
        id: 3,
        content: "Résilier l'offre internet"
      }
    ]
  }

  deleteToDo = (itemToDelete)  => {
    const items = this.state.todos.filter((item) => {
     return item.id !== itemToDelete
    })
    this.setState({
      todos: items

    })
  }

  addToDo = (newItem) => {
    newItem.id = Math.random();
    const updatedState = [...this.state.todos, newItem];
    this.setState({
      todos: updatedState
    })
  }
 

  render() {
 
    var event = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return (
      <div className="App">
        <div className="deco-nav"></div>
        <div className="app-contenu">
        <p>Liste des taches de :</p>
          <h2>{event.toLocaleDateString('fr-FR', options)}</h2>
          
          <Todos visualizeToDo={this.state.todos} deleteToDo={this.deleteToDo} />
          <AddForm addToDo={this.addToDo} />
        </div> 
      </div>
    );
  }
 
}

export default App;
