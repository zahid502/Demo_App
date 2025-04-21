import {Theme} from '@app-interfaces';
import {height_screen} from '@app-utils/dimensions';
import {colors, fonts} from '@constants';
import {StyleSheet} from 'react-native';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: colors.background,
    },
    container: {
      flex: 1,
      paddingTop: height_screen * 0.04,
      backgroundColor: colors.background,
    },
    userInfoSection: {
      alignItems: 'center',
      paddingBottom: 15,
      borderBottomWidth: 0.5,
      borderBottomColor: colors.gray,
    },
    userName: {
      fontSize: 16,
      lineHeight: 20,
      color: colors.primary,
      fontFamily: fonts.SFPRODISPLAY_BOLD,
      paddingTop: 15,
    },
    userEmail: {
      fontSize: 16,
      lineHeight: 20,
      color: colors.primary,
      fontFamily: fonts.SFPRODISPLAY_BOLD,
      paddingTop: 3,
    },
    drawerItemContainer: {
      paddingTop: 20,
    },
    drawerItem: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    itemText: {
      color: colors.primary,
      fontSize: 14,
      width: 110,
      fontFamily: fonts.SFPRODISPLAY_MEDIUM,
    },
    caption: {
      fontSize: 12,
      color: colors.primary,
      textAlign: 'center',
      fontFamily: fonts.SFPRODISPLAY_BOLD,
      paddingVertical: 10,
    },
  });

export default createStyles;
