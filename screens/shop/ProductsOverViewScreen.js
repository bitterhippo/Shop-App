import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
// import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';
import CustomHeaderButton from '../../components/UI/HeaderButton';

const ProductsOverviewScreen = props => {

  const products = useSelector(state => state.products.availableProducts);

  const dispatch = useDispatch();

  return (
    <FlatList
      //The array that values will be extracted from
      data={products}
      keyExtractor={item => item.id}
      //How the items that are extracted will be rendered
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
          onAddToCart={() => {
            dispatch(cartActions.addToCart(itemData.item));
          }}
        />
      }
    />
  )
};

ProductsOverviewScreen.navigationOptions = navData => {
  return {
    headerTitle: 'All Products',
    headerRight: () =>
      <CustomHeaderButton onPush={() => navData.navigation.navigate('Cart')} />
  }
};



export default ProductsOverviewScreen;