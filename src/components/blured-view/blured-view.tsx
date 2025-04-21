import {colors} from '@constants';
import {BlurView, BlurViewProps} from '@react-native-community/blur';
import React from 'react';
import {
  Dimensions,
  Platform,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

type IProps = {
  children?: Array<JSX.Element> | JSX.Element;
  style?: StyleProp<ViewStyle>;
  blurType?: 'dark' | 'light' | 'xlight';
  blurAmount?: number;
  reducedTransparencyFallbackColor?: string;
  props?: BlurViewProps;
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const BluredView: React.FC<IProps> = ({
  style,
  children,
  props,
  blurType = 'light',
  blurAmount = 10,
  reducedTransparencyFallbackColor = colors.white,
}) => {
  if (Platform.OS === 'ios') {
    if (children) {
      return (
        <BlurView
          style={[styles.container, style]}
          blurType={blurType}
          blurAmount={blurAmount}
          reducedTransparencyFallbackColor={reducedTransparencyFallbackColor}
          {...props}>
          {children}
        </BlurView>
      );
    }
    return (
      <BlurView
        style={[styles.container, style]}
        blurType={blurType}
        blurAmount={blurAmount}
        reducedTransparencyFallbackColor={reducedTransparencyFallbackColor}
        {...props}
      />
    );
  } else {
    if (children) {
      return (
        <View style={[styles.container, style]}>
          <BlurView
            style={[styles.container, style]}
            blurType={blurType}
            blurAmount={blurAmount}
            reducedTransparencyFallbackColor={reducedTransparencyFallbackColor}
            {...props}
          />
          {children}
        </View>
      );
    }
    return (
      <View style={[styles.container, style]}>
        <BlurView
          style={[styles.container, style]}
          blurType={blurType}
          blurAmount={blurAmount}
          reducedTransparencyFallbackColor={reducedTransparencyFallbackColor}
          {...props}
        />
      </View>
    );
  }
};

export default BluredView;

//------------------------------------
const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    width: windowWidth,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
