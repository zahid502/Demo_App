import {Images, ScreenEnum, VectorIcons, colors} from '@constants';
import {useTheme} from '@hooks/use-theme';
import {DrawerItem} from '@react-navigation/drawer';
import {DrawerNavigationHelpers} from '@react-navigation/drawer/lib/typescript/src/types';
import {DrawerActions} from '@react-navigation/native';
import {RootState} from '@redux/store';
import {HelperService} from '@services';
import React, {memo, useMemo} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import VersionInfo from 'react-native-version-info';
import {connect} from 'react-redux';
import {navigate} from '../../../root-navigation';
import createStyles from './styles';
import {User} from '@app-types';

//-----------------------------
interface IDrawerContentProps {
  navigation: DrawerNavigationHelpers;
  currentUser: User;
}

const mapStateToProps = (state: RootState) => {
  return {
    currentUser: state.auth.currentUser,
  };
};

//-----------------------------------------------------------------
const Drawer = memo(({navigation, currentUser}: IDrawerContentProps) => {
  const {theme} = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme.color]);

  const logout = () => {
    navigation?.dispatch(DrawerActions.closeDrawer());
    HelperService.getInstance()?.clearAllStates();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.userInfoSection}>
            <Images.LOGO_G height={50} width={50} />
            {currentUser?.fullName && (
              <Text style={styles.userName}>{currentUser?.fullName}</Text>
            )}
            {currentUser?.email && (
              <Text style={styles.userEmail}>{currentUser.email}</Text>
            )}
          </View>

          <View style={styles.drawerItemContainer}>
            <DrawerItem
              inactiveTintColor={colors.primary}
              label={({focused, color}) => {
                return (
                  <View style={styles.drawerItem}>
                    <Text style={styles.itemText}>Home</Text>
                  </View>
                );
              }}
              icon={({color, size}) => (
                <VectorIcons.MaterialCommunity
                  name="home"
                  color={colors.primary}
                  size={size}
                />
              )}
              onPress={() => {
                navigate(ScreenEnum.Home);
              }}
            />

            <DrawerItem
              inactiveTintColor={colors.primary}
              label={({focused, color}) => {
                return (
                  <View style={styles.drawerItem}>
                    <Text style={styles.itemText}>Logout</Text>
                  </View>
                );
              }}
              icon={({color, size}) => (
                <TouchableOpacity onPress={logout}>
                  <VectorIcons.MaterialCommunity
                    name="logout"
                    color={colors.primary}
                    size={size}
                  />
                </TouchableOpacity>
              )}
              onPress={logout}
            />
          </View>
        </View>
      </ScrollView>
      <Text style={styles.caption}>Version {VersionInfo.appVersion}</Text>
    </SafeAreaView>
  );
});

export default connect(mapStateToProps)(Drawer);
