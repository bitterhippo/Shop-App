import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

import Colors from '../../constants/Colors';

const ProductItem = ({ title, image, price, onViewDetail, onAddToCart }) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback
  }

  return (
    <TouchableCmp 
    style={styles.wrapper}
    onPress={onViewDetail} 
    useForeground>
      <View style={styles.product}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: `${image}` }} />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}> {title} </Text>
          <Text style={styles.price}> {price} </Text>
        </View>
        <View style={styles.actions}>
          <Button
            style={styles.button}
            color={Colors.primary}
            title="View Details"
            onPress={onViewDetail} />
          <Button
            color={Colors.primary}
            title="to Cart"
            onPress={onAddToCart} />
        </View>
      </View>
    </TouchableCmp>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    maxHeight: 350
  },
  product: {
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    margin: 20,
  },
  image: {
    width: 300,
    height: 150,
    marginHorizontal: 'auto',
    objectFit: 'cover'
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
    alignItem: 'center',
    height: '25%',
    paddingHorizontal: 20
  },
  details: {
    alignItems: 'center',
    height: '15%',
    padding: 10
  },
  imgageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    BorderTopRightRadius: 10,
    overflow: 'hidden'
  },
});

export default ProductItem;