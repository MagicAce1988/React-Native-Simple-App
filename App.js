import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import uuid from 'react-native-uuid';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid.v4(), text: 'Milk'},
    {id: uuid.v4(), text: 'Eggs'},
    {id: uuid.v4(), text: 'Bread'},
    {id: uuid.v4(), text: 'Juice'},
    {id: uuid.v4(), text: 'Steak'},
  ]);

  const deleteItem = (id) => {
    console.log('something');
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const addItem = (item) => {
    if (items.findIndex((listItem) => listItem.text === item) === -1) {
      setItems((prevItems) => [...prevItems, {id: uuid.v4(), text: item}]);
    }
  };

  return (
    <View style={styles.container}>
      <Header text="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 60},
});

export default App;
