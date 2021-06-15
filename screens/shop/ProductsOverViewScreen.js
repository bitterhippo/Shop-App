import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';
import HeaderButton from '../../components/UI/HeaderButton';

const ProductsOverviewScreen = props => {

  const products = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData =>
        <ProductItem
          title={itemData.item.title}
          price={itemData.item.price}
          image={itemData.item.imageUrl}
          onViewDetail={() => {
            props.navigation.navigate('ProductDetail', {
              productId: itemData.item.id,
              productTitle: itemData.item.title
            })
          }}
          onAddtoCart={() => {
            dispatch(cartActions.addToCart(itemData.item));
          }}
        />
      }
    />
  )
};

ProductsOverviewScreen.navigationOptions = {
  headerTitle: 'All Products',
  headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item 
    title='Cart' 
    iconName={'md-cart'}
    onPress={() => {}}
    />
  </HeaderButtons>
};

export default ProductsOverviewScreen;