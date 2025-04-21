import {HomeHeader, SecondaryButton} from '@components';
import {colors, Images} from '@constants';
import {useTheme} from '@hooks/use-theme';
import {RootState} from '@redux/store';
import React, {memo, useMemo} from 'react';
import {RefreshControl, ScrollView, StatusBar, Text, View} from 'react-native';
import {connect} from 'react-redux';
import createStyles from './styles';

//----------------------------------------------------------------
interface IHomeProps {
  loading: boolean;
}
//----------------------------------------------------------------
const mapStateToProps = (state: RootState) => {
  return {
    loading: false,
  };
};
//----------------------------------------------------------------

const HomeScreen = memo(({loading}: IHomeProps) => {
  const {theme} = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme.color]);

  const _handleRefresh = () => {};

  const EmptyView = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>No recent activity</Text>
        <Text style={styles.emptyDescription}>
          Your movies will appear here.
        </Text>
      </View>
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <HomeHeader name={'Muhammad Zahid'} />
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollViewContent}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={_handleRefresh}
              tintColor={colors.primary}
            />
          }>
          <EmptyView />
        </ScrollView>
      </View>
    </>
  );
});

export default connect(mapStateToProps)(HomeScreen);
