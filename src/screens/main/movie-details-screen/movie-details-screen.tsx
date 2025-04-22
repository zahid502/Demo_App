import {CustomHeader} from '@components';
import {ScreenEnum} from '@constants';
import {useTheme} from '@hooks/use-theme';
import {RootState} from '@redux/store';
import {MainRouteProp} from '@routes/param-list';
import React, {memo, useMemo} from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import VideoPlayer from 'react-native-video-player';
import {connect} from 'react-redux';
import createStyles from './styles';

//-------------------------------------------------
interface IProps {
  route: MainRouteProp<ScreenEnum.MovieDetails>;
}
//-------------------------------------------------
const mapStateToProps = (state: RootState) => {
  return {};
};
//-------------------------------------------------

const MovieDetailsScreen = memo(({route}: IProps) => {
  const {theme} = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme.color]);
  const movie = route.params?.movie;

  return (
    <>
      <SafeAreaView style={styles.safeArea} />
      <CustomHeader title={movie.title} isBack />
      <ScrollView style={styles.container}>
        <Image source={{uri: movie.poster}} style={styles.posterLarge} />
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.details}>
          {movie.year} • {movie.genre.join(', ')}
        </Text>
        <Text style={styles.details}>🎬 Directed by {movie.director}</Text>
        <Text style={styles.plot}>{movie.plot}</Text>
        <VideoPlayer
          source={{
            // uri: movie?.trailer, // example url not work
            uri: 'https://cdn.pixabay.com/video/2021/11/28/99215-653943098_tiny.mp4',
          }}
          videoWidth={widthPercentageToDP('100%')}
          videoHeight={heightPercentageToDP('50%')}
          autoplay={true}
          repeat={true}
          defaultMuted={false}
          showDuration={false}
          disableFullscreen={true}
          disableControlsAutoHide={true}
          onError={(error: any) => console.log('Video Error:', error)}
        />
        <View style={{height: 100}} />
      </ScrollView>
    </>
  );
});

export default connect(mapStateToProps)(MovieDetailsScreen);
