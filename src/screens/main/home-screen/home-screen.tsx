import {Movie} from '@app-types';
import {HomeHeader, ProgressLoading} from '@components';
import {colors, ScreenEnum} from '@constants';
import {useTheme} from '@hooks/use-theme';
import {moviesList, setLoading} from '@redux/slice/main/movies-list-slice';
import store, {RootState} from '@redux/store';
import React, {memo, useEffect, useMemo} from 'react';
import {
  FlatList,
  Image,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {navigate} from '../../../../root-navigation';
import createStyles from './styles';
import {addFavorite, removeFavorite} from '@redux/slice/main/favourites-slice';

//----------------------------------------------------------------
interface IHomeProps {
  loading: boolean;
  data: Array<Movie>;
  favorites: Array<Movie>;
}
//----------------------------------------------------------------
const mapStateToProps = (state: RootState) => {
  return {
    loading: state.moviesList.loading,
    data: state.moviesList.data,
    favorites: state.favorites.data,
  };
};
//----------------------------------------------------------------

const HomeScreen = memo(({loading, data, favorites}: IHomeProps) => {
  const dispatch = store.store.dispatch;
  const {theme} = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme.color]);

  useEffect(() => {
    dispatch(moviesList({}));
    return () => {
      dispatch(setLoading(false));
    };
  }, []);

  const _handleRefresh = () => {
    dispatch(moviesList({}));
  };

  const _handleItemPress = (item: Movie) => {
    navigate(ScreenEnum.MovieDetails, {movie: item});
  };

  const toggleFavorite = (movie: Movie) => {
    const isFavorite = favorites?.some(item => item.id === movie.id);

    if (isFavorite) {
      dispatch(removeFavorite(movie.id));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  const _renderMovie = ({item}: {item: Movie}) => {
    return (
      <TouchableOpacity
        onPress={() => _handleItemPress(item)}
        style={styles.card}>
        <Image source={{uri: item.poster}} style={styles.poster} />
        <View style={styles.cardContent}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>
            {item.year} • {item.genre.join(', ')}
          </Text>
          <Text style={styles.rating}>⭐ {item.rating}</Text>
          <TouchableOpacity
            onPress={() => toggleFavorite(item)}
            style={styles.favoriteButton}>
            <Text style={styles.favoriteText}>❤️ Add to Favorite</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  const _renderEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyTitle}>No recent activity</Text>
      <Text style={styles.emptyDescription}>Your movies will appear here.</Text>
    </View>
  );

  return (
    <>
      {loading && <ProgressLoading visible={false} />}
      <HomeHeader name={'Muhammad Zahid'} />
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={_renderMovie}
          contentContainerStyle={styles.scrollViewContent}
          ListEmptyComponent={_renderEmptyComponent}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={_handleRefresh}
              tintColor={colors.primary}
            />
          }
          ListFooterComponent={<View style={{height: 100}} />}
        />
      </View>
    </>
  );
});

export default connect(mapStateToProps)(HomeScreen);
