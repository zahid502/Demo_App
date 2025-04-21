import {PrimaryButton} from '@components';
import {colors, fonts, VectorIcons} from '@constants';
import React from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface CustomBottomSheetProps {
  title: string;
  description?: string;
  buttonTitle: string;
  onButtonPress: () => void;
  onCancel: () => void;
  children?: React.ReactNode;
  showCancelButton?: boolean;
}

const CustomBottomSheet: React.FC<CustomBottomSheetProps> = ({
  title,
  description,
  onCancel,
  onButtonPress,
  buttonTitle,
  children,
  showCancelButton = true,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      {showCancelButton && (
        <TouchableOpacity onPress={onCancel} style={styles.closeButton}>
          <VectorIcons.MaterialCommunity
            name="close"
            color={colors.primaryLighter}
            size={30}
          />
        </TouchableOpacity>
      )}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
        {children && <View style={styles.childrenContainer}>{children}</View>}
        <PrimaryButton onPress={onButtonPress} title={buttonTitle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.white,
    position: 'absolute',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    bottom: 0,
    padding: 20,
    paddingTop: 15,
    paddingBottom: Platform.OS === 'ios' ? 30 : 10,
  },
  line: {
    width: 50,
    height: 3,
    backgroundColor: colors.lightGray,
    borderRadius: 100,
    alignSelf: 'center',
    marginBottom: 15,
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 10,
  },
  content: {
    // alignItems: 'center',
  },
  title: {
    fontSize: 28,
    color: colors.primary,
    fontFamily: fonts.SFPRODISPLAY_SEMIBOLD,
    marginBottom: 8,
    lineHeight: 36,
  },
  description: {
    fontSize: 16,
    color: colors.middlePrimary,
    fontFamily: fonts.SFPRODISPLAY_REGULAR,
    lineHeight: 20,
    marginBottom: 20,
  },
  childrenContainer: {
    marginBottom: 20,
  },
});

export default CustomBottomSheet;
