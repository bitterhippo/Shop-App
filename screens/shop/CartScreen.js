import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../../constants/Colors';
import CartItem from '../../components/shop/CartItem';
import * as cartActions from '../../store/actions/cart';
import * as orderActions from '../../store/actions/orders';

const CartScreen = props => {
  const cartTotalAmount = useSelector(state => state.cart.totalAmount)
  const CartItems = useSelector(state => {
    const transformedCartItems = [];
    for (const key in state.cart.items) {
      transformedCartItems.push({
        productId: key,
        productTitle: state.cart.items[key].proudctTitle,
        proudctPrice: state.cart.items[key].proudctPrice,
        quantity: state.cart.items.[key].quantity,
        sum: state.cart.items[key].sum
      });
    }
    return transformedCartItems;
  });

  const dispatch = useDispatch();

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text>Total: </Text>
        <Text style={styles.amount}>{cartTotalAmount.toFixed(2)}</Text>
        <Button
         color={Colors.accent} 
         title="Order Now"
         disabled={CartItems.length === 0}
         onPress={() => {
           dispatch(orderActions.addOrder(CartItems, cartTotalAmount))
         }}
         >Order Now</Button>
      </View>
      <FlatList 
        data={CartItems}
        keyExtractor={item => item.productId}
        renderItem={currentItem=> <CartItem 
          title={currentItem.item.title}
          quantity={currentItem.item.quantity}
          amount={currentItem.item.sum}
          onRemove={() => {
            dispatch(cartActions.removeFromCart(currentItem.item.productId))
          }}
        />}
      />
    </View>
  )
};

CartScreen.navigationOptions ={
  headerTitle: 'Your Cart'
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