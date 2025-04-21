import {Theme} from '@app-interfaces';
import {colors, fonts} from '@constants';
import {StyleSheet} from 'react-native';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.color.background,
      padding: 20,
    },
    emptyContainer: {
      flex: 1,
      paddingTop: 5,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 100,
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
