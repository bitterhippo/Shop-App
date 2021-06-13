import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const ProductItem = ({ title, image, price, onViewDetail, onAddToCart }) => {
  return (
    <View>
      <Image  
      style={styles.image} 
      source={{uri: image}}/>
      <Text style={styles.title}> {title} </Text>
      <Text style={styles.price}> {price} </Text>
      <View style={styles.actions}>
        <Button 
        title="View Details" 
        onPress={onViewDetail}/>
        <Button 
        title="to Cart" 
        onPress={onAddToCart}/>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  product: {
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    margin: 20,
  }, 
  image: {
    width: '100%',
    height: '60%',
  },
  title: {
    fontSize: 18,
    marginVertical: 4
  },
  price: {
    fontSize: 14,
    color: '#888'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItem: 'center'
  }
});

export default ProductItem;