import {Theme} from '@app-interfaces';
import {colors, fonts} from '@constants';
import {StyleSheet} from 'react-native';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      width: '93%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.white,
      zIndex: 99999999,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: colors.primary,
      paddingVertical: 5,
    },
    darkContainer: {
      width: '93%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.primary,
      zIndex: 99999999,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: colors.white,
      paddingVertical: 5,
    },
    textStyle: {
      color: colors.primary,
      fontSize: 14,
      lineHeight: 20,
      fontFamily: fonts.SFPRODISPLAY_REGULAR,
    },
    darkTextStyle: {
      color: colors.primary,
      fontSize: 14,
      lineHeight: 20,
      fontFamily: fonts.SFPRODISPLAY_REGULAR,
    },
    messageWrapper: {
      marginLeft: 10,
      width: '85%',
      flexDirection: 'row',
      alignItems: 'center',
    },
    cancelButton: {
      borderRadius: 100,
      padding: 5,
    },
    iconWrapper: {
      height: 22,
      width: 22,
      marginRight: 10,
      borderRadius: 100,
      backgroundColor: colors.success,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default createStyles;
