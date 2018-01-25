import React, {Component} from 'react';
import './Input.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
    this.setState({[e.target.name] : e.target.value});
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSave({...this.state});
    this.setState({
      todo: ''
    });
  }
  
    render() {
        const {todo} = this.state;
        return (
            <div>
              <h1>Todo-list-app</h1>
              <form onSubmit={this.handleSubmit}>
                <input
                  name="todo"
                  type="text"
                  value={todo}
                  onChange={this.handleChange}
                  />
                <button type="submit">Add todo</button>
              </form>
            </div>
        );
    }
}

export default Input;