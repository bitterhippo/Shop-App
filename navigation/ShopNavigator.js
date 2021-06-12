import { createStackNavigator } from 'react-navivation';
import { Platform } from 'react-native';


import ProductsOverviewScreen from '../screen/shop/ProductsOverviewScreen';
import Colors from '../constants/Colors';


const ProductsNavigator = createStackNavigation({
  ProductsOverview: ProductsOverviewScreen
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColors: Colors.primary
    },
    headerTintColor: 'white'
  }
});