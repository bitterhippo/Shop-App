import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Platform } from 'react-native';

//Screens
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';


//non-screens
import Colors from '../constants/Colors';


const ProductsNavigator = createStackNavigator(
  //Navigation Identifiers
  {
  ProductsOverview: ProductsOverviewScreen,
  ProductDetail: ProductDetailScreen,
  Cart: CartScreen,
}, 
  //Display configuration options
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Colors.primary 
    },
    headerTintColor: 'white'
  }
});

export default createAppContainer(ProductsNavigator);
