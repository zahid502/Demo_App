import {Images} from '@constants';
import {useTheme} from '@hooks/use-theme';
import React, {memo, useMemo} from 'react';
import {StyleProp, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import createStyles from './styles';
import {navigationRef} from '../../../../navigation-helper';
import {DrawerActions} from '@react-navigation/native';

//-------------------------------------------------
interface HomeHeaderProps {
  style?: StyleProp<ViewStyle>;
  name?: string;
}
//-------------------------------------------------

const HomeHeader = memo(({style, name}: HomeHeaderProps) => {
  const {theme} = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme.color]);

  const openDrawer = () => {
    // navigationRef.current.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={[styles.container, style]}>
      <View style={{flex: 1}}>
        {name && (
          <Text style={styles.user} numberOfLines={1}>
            Hey, <Text style={styles.user1}>{name}</Text>
          </Text>
        )}
        <Text style={styles.welcome}>Welcome back!</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.bellWrapper}
        onPress={openDrawer}>
        <Images.BELL />
      </TouchableOpacity>
    </View>
  );
});

export default HomeHeader;
