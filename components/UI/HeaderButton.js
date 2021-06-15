import React from 'react';
import { headerButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';

const HeaderButton = props => {
  return <HeaderButton 
  {...props} 
  IconComponent={Ionicons} 
  iconSize={23} 
  color={Colors.primary} 
  />;
};

export default HeaderButton;

