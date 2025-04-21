import {User} from '@app-types';
import {ToastView} from '@components';
import {colors} from '@constants';
import NetInfo from '@react-native-community/netinfo';
import {NavigationContainer} from '@react-navigation/native';
import {RootState} from '@redux/store';
import {HelperService} from '@services';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import SplashScreen from 'react-native-splash-screen';
import {connect} from 'react-redux';
import {isReadyRef, navigationRef, routeNameRef} from '../../navigation-helper';
import AuthNav from './auth/auth.routes';
import MainDrawerNav from './main/drawer-nav.routes';

//-----------------------------------------------
interface IProps {
  currentUser: User;
}

//-----------------------------------------------
const mapStateToProps = (state: RootState) => {
  return {
    currentUser: state.auth.currentUser,
  };
};

//-----------------------------------------------

const Routes = ({currentUser}: IProps) => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);

    const unsubscribe = NetInfo?.addEventListener(state => {
      HelperService?.getInstance()?.showNetworkStatus(
        state.isConnected ? state.isConnected : false,
      );
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef?.current?.getCurrentRoute()?.name;
        isReadyRef.current = true;
      }}>
      <ToastView />
      <FlashMessage position={'bottom'} />
      <StatusBar backgroundColor={colors.primary} />
      {currentUser ? <MainDrawerNav /> : <AuthNav />}
    </NavigationContainer>
  );
};

export default connect(mapStateToProps)(Routes);
