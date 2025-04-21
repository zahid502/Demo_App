import {Theme} from '@app-interfaces';
import {colors, fonts, VectorIcons} from '@constants';
import {useTheme} from '@hooks/use-theme';
import React, {memo, useMemo} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

//-------------------------------------------------
interface ProfileItemProps {
  title: string;
  color?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}
//-------------------------------------------------

const ProfileItem = memo(({title, color, style, onPress}: ProfileItemProps) => {
  const {theme} = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme.color]);

  return (
    <View style={[styles.container, style]}>
      <View style={[styles.circleView, {backgroundColor: color}]} />
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={styles.row}>
        <Text style={styles.title}>{title}</Text>
        <VectorIcons.AntDesignIcon
          name="right"
          size={18}
          color={colors.primary}
        />
      </TouchableOpacity>
    </View>
  );
});

export default ProfileItem;

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    circleView: {
      height: 37,
      width: 37,
      borderRadius: 100,
      backgroundColor: colors.lightBorder,
      marginRight: 20,
    },
    title: {
      fontSize: 15,
      fontFamily: fonts.SFPRODISPLAY_MEDIUM,
      lineHeight: 22,
      color: colors.primary,
    },
    row: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 5,
    },
  });
