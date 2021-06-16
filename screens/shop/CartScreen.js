import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { useSelector } from 'react-redux';

import Colors from '../../constants/Colors';

const CartScreen = props => {
  const cartTotalAmount = useSelector(state => state.cart.totalAmount)


  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text>Total: </Text>
        <Text style={styles.amount}>{cartTotalAmount.toFixed(2)}</Text>
        <Button color={Colors.accent} title="Order Now">Order Now</Button>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    margin: 20
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  amount: {
    color: Colors.Primary,
  },
});

export default CartScreen;