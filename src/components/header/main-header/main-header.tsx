import {useTheme} from '@hooks/use-theme';
import React, {memo, useMemo} from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import createStyles from './styles';

//-------------------------------------------------
interface MainHeaderProps {
  title?: string;
  style?: StyleProp<ViewStyle>;
}
//-------------------------------------------------

const MainHeader = memo(({title, style}: MainHeaderProps) => {
  const {theme} = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme.color]);

  return (
    <View style={[styles.container, style]}>
      {title && <Text style={styles.title}>{title}</Text>}
    </View>
  );
});

export default MainHeader;
