import {StyleSheet} from 'react-native';
import {Theme} from '@app-interfaces';
import {colors, fonts} from '@constants';
import {width_screen} from '@app-utils/dimensions';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      height: 50,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      // paddingVertical: width_screen * 0.04,
      borderRadius: 8,
      backgroundColor: colors.primary,

      ///////////---shadow---///////////
      shadowColor: colors.primary,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 2,
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
      color: colors.white,
      textAlign: 'center',
      paddingRight: 3,
    },
  });

export default createStyles;
