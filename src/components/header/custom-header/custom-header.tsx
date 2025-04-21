import {colors, Images, VectorIcons} from '@constants';
import {useTheme} from '@hooks/use-theme';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import React, {memo, useMemo} from 'react';
import {StyleProp, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import {goBack} from '../../../../root-navigation';
import createStyles from './styles';

//-------------------------------------------------
interface CustomHeaderProps {
  title?: string;
  style?: StyleProp<ViewStyle>;
  interval?: number;
  isBack?: boolean;
  onBackPress?: () => void;
}
//-------------------------------------------------

const CustomHeader = memo(
  ({title, style, isBack, onBackPress}: CustomHeaderProps) => {
    const navigation = useNavigation();
    const {theme} = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme.color]);

    const openDrawer = () => {
      navigation?.dispatch(DrawerActions.openDrawer());
    };

    const onGoBackPress = () => {
      if (onBackPress) {
        onBackPress();
      } else {
        goBack();
      }
    };

    return (
      <View style={[styles.container, style]}>
        {isBack ? (
          <TouchableOpacity style={styles.iconWrapper} onPress={onGoBackPress}>
            <Images.BACK />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.iconWrapper} onPress={openDrawer}>
            <VectorIcons.MaterialCommunity
              name="menu"
              size={30}
              color={colors.primary}
            />
          </TouchableOpacity>
        )}
        {title && <Text style={styles.title}>{title}</Text>}
        <View style={styles.iconWrapper} />
      </View>
    );
  },
);

export default CustomHeader;
