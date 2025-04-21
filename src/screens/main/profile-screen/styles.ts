import {Theme} from '@app-interfaces';
import {colors, fonts} from '@constants';
import {StyleSheet} from 'react-native';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.color.background,
      padding: 20,
    },
    seperator: {width: '85%', alignSelf: 'flex-end', marginVertical: 15},
    heading: {
      fontSize: 14,
      lineHeight: 17,
      color: colors.middlePrimary,
      fontFamily: fonts.SFPRODISPLAY_REGULAR,
      paddingLeft: 8,
    },
    itemWrapper: {
      backgroundColor: colors.white,
      padding: 15,
      borderRadius: 8,
      borderWidth: 0.3,
      borderColor: colors.lightBorder,
      marginVertical: 10,
      marginBottom: 20,
    },
    button: {marginBottom: 130},
    buttonText: {color: '#FF4A4A'},
  });
export default createStyles;
