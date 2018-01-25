import React, {Component} from 'react';
import './Item.css';

class Item extends Component {
  constructor(props) {
    super(props);
      this.state = {
        active: false,
      };
      this.toggleClass= this.toggleClass.bind(this);
    }
    
  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }
    
  render() {
    const {todo, id, onDelete} = this.props;
    return (
      <li
        className={this.state.active ? 'completed' : null}
        onClick={this.toggleClass} 
      ><span><i onClick={() => onDelete(id)} className="fa fa-times"></i></span> {todo}</li>
    );
  }
}

export default Item;