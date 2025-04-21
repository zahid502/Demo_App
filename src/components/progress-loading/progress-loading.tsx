import BluredView from '@components/blured-view/blured-view';
import Loading from '@components/loading/loading';
import {colors} from '@constants';
import {useTheme} from '@hooks/use-theme';
import React, {useMemo} from 'react';
import {Modal, ModalProps, Text, View} from 'react-native';
import createStyles from './styles';

//------------------------------
interface IProgressLoadingProps {
  visible: boolean;
  props?: ModalProps;
}

//------------------------------------------------------------------------------
const ProgressLoading: React.FC<IProgressLoadingProps> = ({visible, props}) => {
  const {theme} = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme.color]);
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType={'fade'}
      {...props}>
      <BluredView />
      <View style={styles.container}>
        <View style={styles.loadingWrapper}>
          <Text style={{fontSize: 16, color: colors.primary}}>Loading</Text>
          <Loading style={{marginTop: 24}} />
        </View>
      </View>
    </Modal>
  );
};

export default ProgressLoading;
