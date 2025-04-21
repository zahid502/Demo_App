import React, {memo, useMemo} from 'react';
import {StyleProp} from 'react-native';
import FastImage, {ImageStyle} from 'react-native-fast-image';
import createStyles from './styles';
import {useTheme} from '@hooks/use-theme';
import {Images} from '@constants';

//----------------------------------------
interface IImageProps {
  url?: string;
  imageStyles?: StyleProp<ImageStyle>;
  imgPath?: boolean;
}

const CustomImage = memo(({imageStyles, url, imgPath = false}: IImageProps) => {
  const {colors, theme} = useTheme();
  const styles = useMemo(() => createStyles(theme), [colors]);

  return (
    <FastImage
      style={imageStyles ?? styles.image}
      source={
        imgPath
          ? Images.no_image_found
          : {
              uri: url,
              priority: FastImage.priority.normal,
              cache: FastImage.cacheControl.immutable,
            }
      }
      resizeMode={FastImage.resizeMode.cover}></FastImage>
  );
});

export default CustomImage;
