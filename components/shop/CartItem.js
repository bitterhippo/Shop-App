import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CartItem = props => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>QTY</Text><Text style={styles.title}>TITLE</Text>
      </View>
      <View>
        <Text>AMOUNT</Text>
      </View>
      <TouchableOpacity
        onPress={props.onRemove}
        style={styles.deleteButton}
      >
        <Text>Trash Bin</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    marginHorizontal: 20
  },
  itemData: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    fontWeight: 'bold',
    color: '#888',
    fontSize: 16
  },
  title: {
    fontSize: 16
  },
  amount: {
    fontSize: 16
  },
  deleteButton: {
    marginBottom: 20
  }
});

export default CartItem;