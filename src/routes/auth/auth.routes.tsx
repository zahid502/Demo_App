import {ScreenEnum} from '@constants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthNavParamList} from '@routes/param-list';
import {SignInScreen, SignUpScreen} from '@screens';
import React from 'react';
import {StatusBar} from 'react-native';

const {Navigator, Screen} = createNativeStackNavigator<AuthNavParamList>();
const AuthNav = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Navigator
        initialRouteName={ScreenEnum.SignIn}
        screenOptions={{headerShown: false}}>
        <Screen
          name={ScreenEnum.SignIn}
          component={SignInScreen}
          options={{animation: 'slide_from_bottom'}}
        />
        <Screen name={ScreenEnum.SignUp} component={SignUpScreen} />
      </Navigator>
    </>
  );
};

export default AuthNav;
