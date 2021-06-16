import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FiShoppingCart } from 'react-icons/fi';


import Colors from '../../constants/Colors';

const CustomHeaderButton = props => {
  return (
    <TouchableOpacity onPress={() => {console.log('lol')}}>
      <FiShoppingCart
        size={23}
        style={{ marginRight: 20, color: 'white' }}
      />
    </TouchableOpacity>
  )
}

export default CustomHeaderButton;
