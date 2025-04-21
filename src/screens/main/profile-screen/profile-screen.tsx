import {MainHeader, ProfileItem, SecondaryButton, Seperator} from '@components';
import {colors, ScreenEnum} from '@constants';
import {useTheme} from '@hooks/use-theme';
import React, {useMemo} from 'react';
import {ScrollView, Text, View} from 'react-native';
import createStyles from './styles';
import {HelperService} from '@services';

const ProfileScreen = () => {
  const {theme} = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme.color]);

  const logout = () => {
    HelperService.getInstance()?.clearAllStates();
  };

  return (
    <>
      <MainHeader title={ScreenEnum.Profile} />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>ACCOUNTS</Text>
        <View style={styles.itemWrapper}>
          <ProfileItem title="My Accounts" color={colors.pf1} />
          <Seperator style={styles.seperator} />
          <ProfileItem title="Business Accounts" color={colors.pf2} />
        </View>

        <Text style={styles.heading}>SETTINGS</Text>
        <View style={styles.itemWrapper}>
          <ProfileItem title="Language" color={colors.pf3} />
          <Seperator style={styles.seperator} />
          <ProfileItem title="Notifications" color={colors.pf4} />
          <Seperator style={styles.seperator} />
          <ProfileItem title="Privacy & Security" color={colors.pf5} />
        </View>

        <Text style={styles.heading}>OTHER</Text>
        <View style={styles.itemWrapper}>
          <ProfileItem title="Contact Support" color={colors.pf6} />
          <Seperator style={styles.seperator} />
          <ProfileItem title="Send Feedback" color={colors.pf4} />
          <Seperator style={styles.seperator} />
          <ProfileItem title="About" color={colors.pf7} />
          <Seperator style={styles.seperator} />
          <ProfileItem title="Delete Account" color={colors.pf8} />
        </View>

        <SecondaryButton
          title="LOG ME OUT"
          style={styles.button}
          textStyle={styles.buttonText}
          onPress={logout}
        />
      </ScrollView>
    </>
  );
};

export default ProfileScreen;
