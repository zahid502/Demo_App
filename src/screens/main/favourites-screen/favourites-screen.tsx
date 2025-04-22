import {Movie} from '@app-types';
import {HomeHeader, MainHeader} from '@components';
import {useTheme} from '@hooks/use-theme';
import store, {RootState} from '@redux/store';
import React, {useMemo} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {navigate} from '../../../../root-navigation';
import createStyles from './styles';
import {removeFavorite} from '@redux/slice/main/favourites-slice';

//----------------------------------------------------------------
interface IFavoritesProps {
  favorites: Movie[];
}
//----------------------------------------------------------------

const mapStateToProps = (state: RootState) => ({
  favorites: state.favorites.data,
});
//----------------------------------------------------------------

const FavoritesScreen = ({favorites}: IFavoritesProps) => {
  const dispatch = store.store.dispatch;
  const {theme} = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme.color]);

  const _handleItemPress = (item: Movie) => {
    navigate('MovieDetails', {movie: item});
  };

  const _handleRemove = (id: number) => {
    dispatch(removeFavorite(id));
  };

  const _renderMovie = ({item}: {item: Movie}) => (
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
          onPress={() => _handleRemove(item.id)}
          style={styles.favoriteButton}>
          <Text style={styles.favoriteText}>💔 Remove</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const _renderEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyTitle}>No favorites yet</Text>
      <Text style={styles.emptyDescription}>
        Add movies to your favorites to see them here.
      </Text>
    </View>
  );

  return (
    <>
      <MainHeader title="Favorites" />
      <View style={styles.container}>
        <FlatList
          data={favorites}
          keyExtractor={item => item.id.toString()}
          renderItem={_renderMovie}
          contentContainerStyle={styles.scrollViewContent}
          ListEmptyComponent={_renderEmptyComponent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
};

export default connect(mapStateToProps)(FavoritesScreen);
