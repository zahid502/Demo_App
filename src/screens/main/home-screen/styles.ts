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
      padding: 10,
      backgroundColor: colors.background,
    },
    card: {
      flexDirection: 'row',
      backgroundColor: theme.color.whitePrimary,
      borderRadius: 10,
      marginBottom: 10,
      padding: 10,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    poster: {
      width: 80,
      height: 120,
      borderRadius: 8,
      marginRight: 10,
    },
    cardContent: {
      flex: 1,
      justifyContent: 'center',
    },
    title: {
      fontSize: 16,
      fontFamily: fonts.SFPRODISPLAY_MEDIUM,
      color: colors.primary,
    },
    subtitle: {
      fontSize: 13,
      fontFamily: fonts.SFPRODISPLAY_REGULAR,
      color: colors.middlePrimary,
      marginTop: 4,
    },
    rating: {
      fontSize: 13,
      color: '#f39c12',
      marginTop: 4,
      fontFamily: fonts.SFPRODISPLAY_REGULAR,
    },
    emptyContainer: {
      marginTop: 100,
      alignItems: 'center',
    },
    emptyTitle: {
      fontSize: 16,
      fontFamily: fonts.SFPRODISPLAY_MEDIUM,
      color: colors.primary,
    },
    emptyDescription: {
      fontSize: 13,
      lineHeight: 17,
      color: colors.middlePrimary,
      fontFamily: fonts.SFPRODISPLAY_REGULAR,
      marginTop: 5,
    },
    favoriteButton: {
      marginTop: 8,
      backgroundColor: colors.lightBorder,
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: 8,
      alignSelf: 'flex-start',
    },

    favoriteText: {
      fontSize: 13,
      lineHeight: 17,
      color: theme.color.primary,
      fontFamily: fonts.SFPRODISPLAY_BOLD,
    },
  });

export default createStyles;
