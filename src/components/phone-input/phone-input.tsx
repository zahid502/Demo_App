import {colors} from '@constants';
import React, {forwardRef} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

interface PhoneInputProps {
  defaultCode?: any;
  allowedCountries?: string[];
  onChangeFormattedText: (text: string) => void;
  onChangeText: (text: string) => void;
  autoFocus?: boolean;
}

const PhoneInputComponent = forwardRef<PhoneInput, PhoneInputProps>(
  (
    {
      defaultCode = 'PK',
      allowedCountries,
      onChangeFormattedText,
      onChangeText,
      autoFocus = false,
    },
    ref,
  ) => {
    return (
      <View style={styles.container}>
        <PhoneInput
          ref={ref}
          containerStyle={[
            styles.inputContainer,
            Platform.OS === 'android' && styles.androidContainer,
          ]}
          textContainerStyle={[
            styles.textContainer,
            Platform.OS === 'android' && styles.textContainerAndroid,
          ]}
          countryPickerButtonStyle={styles.flagButton}
          countryPickerProps={{
            countryCodes: allowedCountries,
          }}
          defaultCode={defaultCode}
          layout="first"
          onChangeText={onChangeText}
          onChangeFormattedText={onChangeFormattedText}
          autoFocus={autoFocus}
        />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputContainer: {
    borderRadius: 10,
    width: '100%',
    backgroundColor: colors.white,
    paddingVertical: 5,
  },
  androidContainer: {
    height: 65,
  },
  textContainer: {
    borderRadius: 10,
    backgroundColor: colors.white,
    marginLeft: 15,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  textContainerAndroid: {
    borderRadius: 10,
    backgroundColor: colors.white,
    marginLeft: 15,
    borderWidth: 1,
    borderColor: colors.primary,
    justifyContent: 'center',
    paddingVertical: 0,
  },
  flagButton: {
    backgroundColor: colors.flagButton,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: colors.lightBorder,
  },
});

export default PhoneInputComponent;
