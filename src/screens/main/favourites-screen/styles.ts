import {Theme} from '@app-interfaces';
import {colors} from '@constants';
import {StyleSheet} from 'react-native';

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: 16,
    },
    scrollViewContent: {
      paddingBottom: 20,
    },
    card: {
      flexDirection: 'row',
      backgroundColor: colors.lightBorder,
      borderRadius: 12,
      marginVertical: 8,
      overflow: 'hidden',
      elevation: 2,
    },
    poster: {
      width: 100,
      height: 150,
      borderTopLeftRadius: 12,
      borderBottomLeftRadius: 12,
    },
    cardContent: {
      flex: 1,
      padding: 12,
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.primary,
    },
    subtitle: {
      fontSize: 14,
      color: colors.gray,
      marginVertical: 4,
    },
    rating: {
      fontSize: 14,
      color: colors.primary,
      fontWeight: '600',
    },
    favoriteButton: {
      marginTop: 10,
      backgroundColor: colors.primary,
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: 20,
      alignSelf: 'flex-start',
    },
    favoriteText: {
      color: colors.white,
      fontSize: 14,
      fontWeight: '600',
    },
    emptyContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 200,
    },
    emptyTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.darkBoder,
    },
    emptyDescription: {
      fontSize: 14,
      color: colors.gray,
      marginTop: 6,
    },
  });
};

export default createStyles;
