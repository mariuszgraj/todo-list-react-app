import React, {Component} from 'react';
import Item from './Item';
import './ListItems.css';

class ListItems extends Component {
  render() {
    const {onDelete} = this.props;
    const items = this.props.items.map((i, index) => (
      <Item key={i.id} {...i} onDelete={onDelete} />
      ));
    return (
      <ul>
        {items}
      </ul>
    );
  }
}

export default ListItems;