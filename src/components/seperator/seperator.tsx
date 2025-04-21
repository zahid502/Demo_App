import React, {memo} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import styles from './styles';

type ISeperatorProps = {
  color?: string;
  style?: StyleProp<ViewStyle>;
};

const Seperator = memo(({color, style}: ISeperatorProps) => {
  return <View style={[styles.container, {backgroundColor: color}, style]} />;
});

export default Seperator;
