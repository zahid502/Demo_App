import {Drawer} from '@components';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerNavParamList} from '@routes/param-list';
import React from 'react';
import MainNav from './main.routes';

const {Navigator, Screen} = createDrawerNavigator<DrawerNavParamList>();
const MainDrawerNav = () => {
  return (
    <Navigator
      drawerContent={({navigation}) => <Drawer navigation={navigation} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'back',
        swipeEnabled: false,
      }}>
      <Screen name={'MainHome'} component={MainNav} />
    </Navigator>
  );
};

export default MainDrawerNav;
