import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainNavParamList} from '@routes/param-list';
import React, {memo} from 'react';
import BottomTabNav from './bottom-tabs.routes';
import {ScreenEnum} from '@constants';
import {MovieDetailsScreen} from '@screens';

const MainNav = memo(() => {
  const {Navigator, Screen} = createNativeStackNavigator<MainNavParamList>();

  return (
    <>
      <Navigator
        initialRouteName={'BottomTabNav'}
        screenOptions={{headerShown: false}}>
        <Screen name="BottomTabNav" component={BottomTabNav} />
        <Screen name={ScreenEnum.MovieDetails} component={MovieDetailsScreen} />
      </Navigator>
    </>
  );
});

export default MainNav;
