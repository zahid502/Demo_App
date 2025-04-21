import {StyleSheet} from 'react-native';
import {Theme} from '@app-interfaces';
import {colors, fonts} from '@constants';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      height: 50,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      backgroundColor: colors.white,
      borderWidth: 0.5,
      borderColor: colors.lightBorder,
    },
    titleWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontFamily: fonts.SFPRODISPLAY_SEMIBOLD,
      fontSize: 15,
      lineHeight: 18,
      color: colors.primary,
      textAlign: 'center',
    },
  });

export default createStyles;
