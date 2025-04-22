import {Theme} from '@app-interfaces';
import {colors, fonts} from '@constants';
import {StyleSheet} from 'react-native';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: theme.color.background,
      padding: 20,
    },
    safeArea: {flex: 0, backgroundColor: colors.white},
    posterLarge: {
      width: '100%',
      height: 200,
      borderRadius: 10,
    },
    video: {
      width: '100%',
      height: 200,
      marginTop: 20,
    },
    title: {
      fontSize: 20,
      lineHeight: 24,
      color: colors.primary,
      fontFamily: fonts.SFPRODISPLAY_BOLD,
      marginTop: 10,
    },
    details: {
      fontSize: 14,
      lineHeight: 18,
      color: colors.middlePrimary,
      fontFamily: fonts.SFPRODISPLAY_REGULAR,
      marginTop: 4,
    },
    plot: {
      fontSize: 14,
      lineHeight: 18,
      color: colors.gray,
      fontFamily: fonts.SFPRODISPLAY_REGULAR,
      marginTop: 10,
      marginBottom: 20,
    },
  });

export default createStyles;
