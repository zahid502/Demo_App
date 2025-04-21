import {Theme} from '@app-interfaces';
import {colors, fonts} from '@constants';
import {StyleSheet} from 'react-native';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme.color.whitePrimary,
      padding: 20,
    },
    user: {
      fontSize: 24,
      fontFamily: fonts.SFPRODISPLAY_MEDIUM,
      color: theme.color.primaryWhite,
      lineHeight: 28,
    },
    user1: {
      fontSize: 24,
      fontFamily: fonts.SFPRODISPLAY_SEMIBOLD,
      color: theme.color.primaryWhite,
      lineHeight: 28,
    },
    welcome: {
      paddingTop: 5,
      fontSize: 14,
      fontFamily: fonts.SFPRODISPLAY_REGULAR,
      color: colors.middlePrimary,
      lineHeight: 16,
    },
    bellWrapper: {
      backgroundColor: colors.secondary,
      borderWidth: 0.5,
      borderColor: colors.lightBorder,
      borderRadius: 6,
      padding: 10,
      marginLeft: 12,
    },
  });

export default createStyles;
