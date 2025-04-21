import {Theme} from '@app-interfaces';
import {colors, fonts} from '@constants';
import {Dimensions, StyleSheet} from 'react-native';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    bgContainer: {
      flex: 1,
      width: width,
      height: height,
      resizeMode: 'cover', // or 'stretch' or 'contain'
    },
    headingText: {
      fontSize: 24,
      lineHeight: 28,
      color: colors.white,
      fontFamily: fonts.SFPRODISPLAY_SEMIBOLD,
      textAlign: 'center',
    },
    labelText: {
      fontSize: 18,
      lineHeight: 22,
      color: colors.lightGray,
      fontFamily: fonts.SFPRODISPLAY_MEDIUM,
      textAlign: 'center',
      paddingTop: 3,
    },
    form: {
      height: height - 30,
      justifyContent: 'center',
      paddingHorizontal: 15,
    },
    formHeader: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 25,
      marginBottom: 40,
    },
    input: {
      marginBottom: 10,
    },
    button: {
      marginTop: 20,
      justifyContent: 'center',
      backgroundColor: colors.primaryLight,
    },
    errorView: {
      minHeight: 45,
      backgroundColor: colors.red,
      zIndex: 2,
      justifyContent: 'center',
      borderRadius: 10,
      padding: 10,
      marginVertical: 10,
      alignSelf: 'baseline',
    },
    corner: {
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderRightWidth: 15,
      borderBottomWidth: 15,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: colors.red,
      top: -15,
      left: 10,
      position: 'absolute',
    },
    error: {
      color: colors.white,
      fontWeight: '600',
      fontSize: 12,
    },
    labelStyle: {color: colors.white, fontFamily: fonts.SFPRODISPLAY_MEDIUM},
    accountText: {
      fontSize: 14,
      lineHeight: 16,
      color: colors.white,
      fontFamily: fonts.SFPRODISPLAY_MEDIUM,
      paddingVertical: 10,
      textAlign: 'right',
      padding: 5,
    },
  });
export default createStyles;
