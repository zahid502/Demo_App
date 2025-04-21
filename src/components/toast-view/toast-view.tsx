import {colors, VectorIcons} from '@constants';
import {useTheme} from '@hooks/use-theme';
import {clearToastMessageState} from '@redux/slice/common/toast-slice';
import store, {RootState} from '@redux/store';
import {HelperService} from '@services';
import React, {useEffect, useMemo, useRef} from 'react';
import {Platform, Text, TouchableOpacity, View} from 'react-native';
import Toast from 'react-native-toast-notifications';
import {connect} from 'react-redux';
import createStyles from './styles';

//-------------------------------------------------
interface ToastViewProps {
  dark?: boolean;
  message?: string;
  offset?: number;
  type?: string;
}
//-------------------------------------------------

const mapStateToProps = (state: RootState) => {
  return {
    message: state.toast.message,
    type: state.toast.type,
  };
};

//-------------------------------------------------

const ToastView = ({dark, message, type, offset}: ToastViewProps) => {
  const {theme} = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme.color]);
  const toastRef: any = useRef();

  const dispatch = store.store.dispatch;

  useEffect(() => {
    if (message) {
      // toastRef.current.hideAll();
      toastRef.current.show(message);

      // dispatch(clearToastMessageState(null));
    }
  }, [message]);

  const onCancel = () => {
    toastRef.current.hideAll(); // Hide all toast messages
  };

  const toastMessage = HelperService.getInstance()?.handleToastMessage(type);

  const MessageView = () => {
    return (
      <View
        style={[
          dark ? styles.darkContainer : styles.container,
          {borderColor: toastMessage.color},
        ]}>
        <View style={styles.messageWrapper}>
          <View
            style={[styles.iconWrapper, {backgroundColor: toastMessage.color}]}>
            <VectorIcons.EntypoIcon
              name={toastMessage.icon}
              size={14}
              color={colors.white}
            />
          </View>
          <Text style={[dark ? styles.darkTextStyle : styles.textStyle]}>
            {message}
          </Text>
        </View>
        <TouchableOpacity onPress={onCancel} style={styles.cancelButton}>
          <VectorIcons.MaterialCommunity
            name="close"
            size={25}
            color={toastMessage.color}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Toast
      ref={toastRef}
      duration={3000}
      placement={'top'}
      type="custom"
      animationType={'slide-in'}
      offset={offset ?? Platform.OS === 'ios' ? 70 : 60}
      // textStyle={[dark ? styles.darkTextStyle : styles.textStyle]}
      // style={[dark ? styles.darkContainer : styles.container]}
      renderType={{
        custom: () => <MessageView />,
      }}
    />
  );
};

export default connect(mapStateToProps)(ToastView);
