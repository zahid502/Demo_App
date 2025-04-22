import {Theme} from '@app-interfaces';
import {Images, ScreenEnum, colors} from '@constants';
import {useTheme} from '@hooks/use-theme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabsNavParamList} from '@routes/param-list';
import {
  AnalyticsScreen,
  HomeScreen,
  ProfileScreen,
  FavouritesScreen,
} from '@screens';
import React, {useMemo} from 'react';
import {Platform, SafeAreaView, StyleSheet, View} from 'react-native';

interface IProps {}

const {Navigator, Screen} = createBottomTabNavigator<BottomTabsNavParamList>();
const BottomTabNav: React.FC<IProps> = () => {
  const {theme} = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme.color]);

  return (
    <>
      <SafeAreaView style={styles.safeArea} />
      <Navigator
        initialRouteName={ScreenEnum.Home}
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarActiveTintColor: colors.background,
          tabBarInactiveTintColor: colors.white,
          tabBarStyle: styles.tabBarStyle,
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarIconStyle: {},

          tabBarBackground: () => <View style={styles.tabBarBackground} />,
          tabBarIcon: ({focused, color, size = 30}) => {
            switch (route.name) {
              case ScreenEnum.Home: {
                return focused ? (
                  <>
                    <View style={styles.activeBar} />
                    <Images.HOME_ACTIVE />
                  </>
                ) : (
                  <Images.HOME />
                );
              }
              case ScreenEnum.Favourites: {
                return focused ? (
                  <>
                    <View style={styles.activeBar} />
                    <Images.CREDIT_CARD_ACTIVE />
                  </>
                ) : (
                  <Images.CREDIT_CARD />
                );
              }
              case ScreenEnum.Analytics: {
                return focused ? (
                  <>
                    <View style={styles.activeBar} />
                    <Images.PIE_CHART_ACTIVE />
                  </>
                ) : (
                  <Images.PIE_CHART />
                );
              }
              case ScreenEnum.Profile: {
                return focused ? (
                  <>
                    <View style={styles.activeBar} />
                    <Images.USER_ACTIVE />
                  </>
                ) : (
                  <Images.USER />
                );
              }
            }
          },
        })}>
        <Screen name={ScreenEnum.Home} component={HomeScreen} />
        <Screen name={ScreenEnum.Favourites} component={FavouritesScreen} />
        <Screen name={ScreenEnum.Analytics} component={AnalyticsScreen} />
        <Screen name={ScreenEnum.Profile} component={ProfileScreen} />
      </Navigator>
    </>
  );
};

export default BottomTabNav;

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    safeArea: {flex: 0, backgroundColor: theme.color.whitePrimary},
    activeBar: {
      width: 40,
      borderTopWidth: 4,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      position: 'absolute',
      top: 0,
    },
    tabBarBackground: {
      justifyContent: 'center',
      alignContent: 'center',
      position: 'absolute',
      bottom: 0,
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: theme.color.whitePrimary,
    },
    tabBarStyle: {
      position: 'absolute',
      borderTopWidth: 0.2,
      borderTopColor: colors.lightBorder,
      height: Platform.OS === 'ios' ? 90 : 75,
    },
    tabBarLabelStyle: {
      marginBottom: Platform.OS === 'ios' ? 0 : 10,
      marginTop: Platform.OS === 'ios' ? 0 : 0,
      color: theme.color.darkGrayWhite,
      fontSize: 12,
    },
  });
