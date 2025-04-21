import {StyleSheet} from 'react-native';
import {Theme} from '@app-interfaces';
import {colors} from '@constants';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      padding: 2,
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.primaryLight,
      borderWidth: 1,
      borderColor: colors.primaryLightest,
    },
    image: {
      height: 100,
      width: 100,
      borderRadius: 50,
    },
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default createStyles;
