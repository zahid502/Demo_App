import {colors, VectorIcons} from '@constants';
import {useTheme} from '@hooks/use-theme';
import React, {memo, useMemo} from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
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
  hideButton?: boolean;
}
//-------------------------------------------------

const SecondaryButton = memo(
  ({
    onPress,
    title,
    style,
    textStyle,
    disabled,
    rightErrow,
    childrenRight,
    hideButton,
  }: IButtonProps) => {
    const {theme} = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme.color]);
    return (
      <>
        {hideButton ? null : (
          <TouchableOpacity
            disabled={disabled}
            activeOpacity={0.6}
            onPress={() => onPress && onPress()}
            style={[
              styles.container,
              disabled && {backgroundColor: colors.lightBorder},
              style,
            ]}>
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
          </TouchableOpacity>
        )}
      </>
    );
  },
);

export default SecondaryButton;
