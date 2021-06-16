import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

import Colors from '../../constants/Colors';

const CustomHeaderButton = props => {
  return (
  <FiShoppingCart 
    size={23}
    color={Colors.pirmary}
  />
  )
}

export default CustomHeaderButton;
