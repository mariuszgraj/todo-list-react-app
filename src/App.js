import React, {Component} from 'react';
import Input from './Input';
import ListItems from './ListItems';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          todo: "Guitar lessons"
        },
        {
          id: 1,
          todo: "ReactJS course"
        },
        {
          id: 2,
          todo: "Install new Mac OS software"
        }
      ],
      nextItemId: 3
    };
    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  
  handleSave(newTodo) {
    this.setState((prevState, props) => {
      const newItem = {...newTodo, id: this.state.nextItemId};
      return {
        nextItemId: prevState.nextItemId + 1,
        items: [...this.state.items, newItem]
      };
    });
  }
  
  onDelete(id) {
    const items = this.state.items.filter(i => i.id !== id);
    this.setState({items});
  }
  
  render() {
    return (
      <div id="container">
        <Input handleSave={this.handleSave} />
        <ListItems onDelete={this.onDelete} items={this.state.items} />
      </div>
    );
  }
}

export default App;
