import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FiShoppingCart } from 'react-icons/fi';

const CustomHeaderButton = ({ onPush }) => {
  return (
    <TouchableOpacity onPress={onPush}>
      <FiShoppingCart
        size={23}
        style={{ marginRight: 20, color: 'white' }}
      />
    </TouchableOpacity>
  )
}

export default CustomHeaderButton;
