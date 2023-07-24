import React from 'react';
import withSorting from './SortingHOC';

const ItemList = ({ items, incrementCount }) => {
  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - Count: {item.count}
            <button onClick={() => incrementCount(item.id)}>Increment Count</button>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default withSorting(ItemList);
