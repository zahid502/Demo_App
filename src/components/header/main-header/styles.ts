import {Theme} from '@app-interfaces';
import {colors, fonts} from '@constants';
import {StyleSheet} from 'react-native';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      height: 60,
      backgroundColor: colors.white,
      justifyContent: 'center',
      paddingHorizontal: 20,
      borderBottomWidth: 0.3,
      borderColor: colors.lightBorder,
    },
    title: {
      fontSize: 24,
      lineHeight: 28.64,
      color: colors.primary,
      fontFamily: fonts.SFPRODISPLAY_SEMIBOLD,
    },
  });

export default createStyles;
