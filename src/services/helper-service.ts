import {height_screen, width_screen} from '@app-utils/dimensions';
import {colors} from '@constants';
import {setCurrentUser} from '@redux/slice/auth/auth-slice';
import {clearRegisterUserState} from '@redux/slice/auth/register-user-slice';
import {setIsConnected} from '@redux/slice/common/net-info-slice';
import {setToastMessage} from '@redux/slice/common/toast-slice';
import store from '@redux/store';
import {PrefManager} from '@services';
import {showMessage} from 'react-native-flash-message';

export class HelperService {
  private static _instance: HelperService;
  private constructor() {}

  public static getInstance = () => {
    if (!HelperService._instance) {
      HelperService._instance = new HelperService();
    }

    return HelperService._instance;
  };

  //------------------------------------------------------------------------
  clearAllStates = () => {
    const dispatch = store.store.dispatch;

    dispatch(setCurrentUser(null));
    dispatch(clearRegisterUserState());
    PrefManager.clearKey('accessToken');
  };

  //------------------------------------------------------------------------
  getParsedData = (data: string) => {
    try {
      return JSON.parse(data);
    } catch (error) {
      return data;
    }
  };

  //------------------------------------------------------------------------
  getIsDeviceMobile = () => {
    const aspectRatio = height_screen / width_screen;
    // You can adjust the threshold based on your criteria for what defines a tablet
    //aspectRatio > 1.6 is Example threshold, you may need to adjust this
    if (aspectRatio > 1.6) {
      return true;
    } else {
      return false;
    }
  };

  //------------------------------------------------------------------------
  handleToastMessage = (type?: string) => {
    switch (type) {
      case 'success':
        return {
          color: colors.success,
          icon: 'check',
        };
      case 'error':
        return {
          color: colors.error,
          icon: 'cross',
        };
      case 'info':
        return {
          color: colors.info,
          icon: 'info',
        };
      case 'warning':
        return {
          color: colors.warning,
          icon: 'warning',
        };
      default:
        return {
          color: colors.primary,
          icon: 'check',
        };
    }
  };

  //------------------------------------------------------------------------

  isNetAvailable = () => {
    const netInfo = store.store.getState()?.netInfo?.isConnected;
    const dispatch = store.store.dispatch;
    if (!netInfo) {
      dispatch(
        setToastMessage({message: 'Internet unavailable!', type: 'error'}),
      );
      return false;
    } else {
      return true;
    }
  };

  //------------------------------------------------------------------------
  showNetworkStatus = (isConnected: boolean) => {
    const prevStatus = store.store.getState()?.netInfo?.isConnected;
    const dispatch = store.store.dispatch;

    if (prevStatus != isConnected) {
      dispatch(setIsConnected(isConnected));
      if (!isConnected) {
        showMessage({
          type: 'danger',
          icon: 'warning',
          message: 'Internet unavailable!',
          autoHide: false,
          hideOnPress: true,
        });
      } else {
        showMessage({
          type: 'success',
          icon: 'success',
          message: 'Back Online!',
          duration: 2000,
          hideOnPress: true,
        });
      }
    }
  };
}
