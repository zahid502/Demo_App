import {Theme} from '@app-interfaces';
import {colors, fonts} from '@constants';
import {StyleSheet} from 'react-native';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      height: 60,
      width: '100%',
      backgroundColor: colors.white,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 16,
      color: colors.primary,
      fontFamily: fonts.SFPRODISPLAY_BOLD,
    },
    iconWrapper: {
      paddingVertical: 5,
      paddingRight: 5,
      flex: 0.2,
    },
  });

export default createStyles;
