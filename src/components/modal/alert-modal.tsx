import {Theme} from '@app-interfaces';
import BluredView from '@components/blured-view/blured-view';
import PrimaryButton from '@components/primary-button/primary-button';
import {colors, fonts} from '@constants';
import {RootState} from '@redux/store';
import React, {memo} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';

interface AlertModalProps {
  visible: boolean;
  onButtonPress: () => void;
  onSecondButtonPress: () => void;
  onClosePress?: () => void;
  message: string;
  btnTitle: string;
  btnSecondTitle: string;
  isCancel?: boolean;
  theme: Theme;
}

const mapStateToProps = (state: RootState) => {
  return {
    theme: state.auth?.currentTheme,
  };
};

const AlertModal = memo(
  ({
    visible,
    onButtonPress,
    onSecondButtonPress,
    message,
    btnTitle,
    btnSecondTitle,
    isCancel,
    theme,
    onClosePress,
  }: AlertModalProps) => {
    return (
      <Modal visible={visible} animationType="slide" transparent={true}>
        <BluredView />
        <View style={styles.innerContainer}>
          <View style={styles.modalContent}>
            <View style={styles.topHeader}>
              <View style={styles.empty} />
              <Text style={styles.heading}>Alert</Text>
              <View>
                {onClosePress && (
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => {
                      onClosePress();
                    }}>
                    <AntDesign
                      name={'closecircleo'}
                      size={25}
                      color={colors.white}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>
            <View style={styles.middleView}>
              <Text style={styles.subHeading}>{message}</Text>

              <View style={styles.row}>
                <PrimaryButton
                  onPress={() => {
                    onButtonPress();
                  }}
                  title={btnTitle}
                  style={styles.buttonContainerSave}
                  textStyle={styles.buttonTextSave}
                />

                <PrimaryButton
                  onPress={() => {
                    onSecondButtonPress();
                  }}
                  title={btnSecondTitle}
                  style={
                    isCancel
                      ? styles.buttonContainerCancel
                      : styles.buttonContainerSave
                  }
                  textStyle={styles.buttonTextCancel}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  },
);

const styles = StyleSheet.create({
  container: {flex: 1},
  innerContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  modalContent: {
    width: '80%',
    paddingBottom: 2,
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,

    ///////////---shadow---///////////
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 2,
  },
  topHeader: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  heading: {
    fontSize: 16,
    textAlignVertical: 'center',
    color: colors.white,
    fontFamily: fonts.SFPRODISPLAY_SEMIBOLD,
  },
  middleView: {
    padding: 10,
  },

  subHeading: {
    fontSize: 14,
    fontFamily: fonts.SFPRODISPLAY_MEDIUM,
    textAlignVertical: 'center',
    color: colors.primary,
    textTransform: 'capitalize',
    paddingVertical: 10,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  buttonTextSave: {
    color: colors.white,
    fontSize: 12,
    lineHeight: 14,
    fontFamily: fonts.SFPRODISPLAY_MEDIUM,
    textTransform: 'uppercase',
  },
  buttonContainerSave: {
    backgroundColor: colors.primary,
    height: 40,
    width: '48%',
    borderRadius: 5,
  },
  buttonTextCancel: {
    color: colors.white,
    fontSize: 12,
    lineHeight: 14,
    fontFamily: fonts.SFPRODISPLAY_MEDIUM,
    textTransform: 'uppercase',
  },
  buttonContainerCancel: {
    backgroundColor: colors.lightGray,
    height: 40,
    width: '48%',
    borderRadius: 5,
  },
  empty: {
    width: 25,
    height: 25,
  },
});

export default connect(mapStateToProps)(AlertModal);
