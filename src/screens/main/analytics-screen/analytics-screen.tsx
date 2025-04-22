import {MainHeader} from '@components';
import {ScreenEnum} from '@constants';
import {useTheme} from '@hooks/use-theme';
import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import createStyles from './styles';

const AnalyticsScreen = () => {
  const {theme} = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme.color]);

  const EmptyView = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>No recent analytics</Text>
        <Text style={styles.emptyDescription}>
          Your analytics will appear here.
        </Text>
      </View>
    );
  };

  return (
    <>
      <MainHeader title={ScreenEnum.Analytics} />
      <View style={styles.container}>
        <EmptyView />
      </View>
    </>
  );
};

export default AnalyticsScreen;
