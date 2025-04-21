import {colors, VectorIcons} from '@constants';
import {useTheme} from '@hooks/use-theme';
import {HelperService} from '@services';
import React, {memo, useMemo} from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {DotIndicator} from 'react-native-indicators';
import createStyles from './styles';

//-------------------------------------------------
interface IButtonProps {
  onPress?: () => void;
  title: string;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  textStyle?: StyleProp<TextStyle>;
  rightErrow?: boolean;
  childrenRight?: React.ReactNode;
  loading?: boolean;
  checkNetwork?: boolean;
}
//-------------------------------------------------

const PrimaryButton = memo(
  ({
    onPress,
    title,
    style,
    textStyle,
    loading,
    disabled,
    rightErrow,
    childrenRight,
    checkNetwork,
  }: IButtonProps) => {
    const {theme} = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme.color]);
    return (
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={0.6}
        style={[
          styles.container,
          disabled && {backgroundColor: colors.lightGray},
          style,
        ]}
        onPress={() => {
          if (checkNetwork) {
            const isNetwork = HelperService?.getInstance()?.isNetAvailable();
            if (isNetwork) {
              onPress && onPress();
            }
          } else {
            onPress && onPress();
          }
        }}>
        {loading ? (
          <DotIndicator color={colors.white} count={3} size={8} />
        ) : (
          <View style={styles.titleWrapper}>
            <Text style={[styles.title, textStyle]}>{title}</Text>
            {rightErrow && (
              <VectorIcons.MaterialCommunity
                name="arrow-right"
                size={18}
                color={colors.white}
              />
            )}
            {childrenRight}
          </View>
        )}
      </TouchableOpacity>
    );
  },
);

export default PrimaryButton;
