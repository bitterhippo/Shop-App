import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';


import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import Colors from '../constants/Colors';


const ProductsNavigator = createStackNavigator({
  ProductsOverview: ProductsOverviewScreen
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColors: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
  }
});

export default createAppContainer(ProductsNavigator);
