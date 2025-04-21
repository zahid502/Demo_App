import {StyleSheet} from 'react-native';
import {Theme} from '@app-interfaces';
import {colors, fonts} from '@constants';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#00000077',
    },
    loadingWrapper: {
      borderRadius: 10,
      paddingVertical: 16,
      paddingHorizontal: 48,
      alignItems: 'center',
      backgroundColor: '#ffffff',
    },
    loadingText: {
      fontSize: 16,
      fontFamily: fonts.SFPRODISPLAY_MEDIUM,
      color: colors.primary,
    },
  });

export default createStyles;
