import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainNavParamList} from '@routes/param-list';
import React, {memo} from 'react';
import BottomTabNav from './bottom-tabs.routes';

const MainNav = memo(() => {
  const {Navigator, Screen} = createNativeStackNavigator<MainNavParamList>();

  return (
    <>
      <Navigator
        initialRouteName={'BottomTabNav'}
        screenOptions={{headerShown: false}}>
        <Screen name="BottomTabNav" component={BottomTabNav} />
      </Navigator>
    </>
  );
});

export default MainNav;
