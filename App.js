import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import productReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import ProductsNavigator from './navigation/ShopNavigator';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <ProductsNavigator />
    </Provider>
  );
}
