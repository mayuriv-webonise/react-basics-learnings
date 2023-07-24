import React, { useCallback, useMemo, useState } from 'react';

const withSorting = (WrappedComponent) => {
  const EnhancedComponent = ({ items, ...props }) => {
    const [updatedItems, setUpdatedItems] = useState(items);

    // Memoized function to increment the count of each item
    const incrementCount = (id) => {
      // Implement your logic here to increment the count of the item with the given id
      const updatedItemsCopy = updatedItems.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      );
      setUpdatedItems(updatedItemsCopy);
      // Call the logic to update the state or perform other actions with the updatedItemsCopy array
      console.log(`Incrementing count for item with id: ${id}`);
    };

    // Ensure updatedItems is an array before sorting
    const sortedItems = useMemo(() => {
      if (!Array.isArray(updatedItems)) {
        return [];
      }
      return [...updatedItems].sort((a, b) => a.id - b.id);
    }, [updatedItems]);

    return <WrappedComponent items={sortedItems} incrementCount={incrementCount} {...props} />;
  };

  return EnhancedComponent;
};

export default withSorting;
