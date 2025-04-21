import {Theme} from '@app-interfaces';
import {colors, fonts} from '@constants';
import {StyleSheet} from 'react-native';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.color.whitePrimary,
    },
    scrollViewContent: {
      backgroundColor: colors.background,
    },
    emptyContainer: {
      margin: 10,
      paddingTop: 5,
      padding: 20,
      backgroundColor: theme.color.whitePrimary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    emptyDescription: {
      fontSize: 13,
      color: colors.middlePrimary,
      fontFamily: fonts.SFPRODISPLAY_REGULAR,
      lineHeight: 15,
      paddingTop: 5,
    },
    emptyTitle: {
      fontSize: 15,
      color: colors.primary,
      fontFamily: fonts.SFPRODISPLAY_MEDIUM,
      lineHeight: 18,
    },
  });
export default createStyles;
