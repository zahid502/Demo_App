import {colors} from '@constants';
import React, {memo} from 'react';
import {ActivityIndicator, ActivityIndicatorProps} from 'react-native';

//---------------------------------------------------
const Loading = memo((props: ActivityIndicatorProps) => {
  const {animating, size = 'large', color = colors.primary} = props;
  return (
    <ActivityIndicator
      animating={animating}
      size={size}
      color={color}
      {...props}
    />
  );
});

export default Loading;
