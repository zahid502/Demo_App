import {colors, fonts, VectorIcons} from '@constants';
import {useField} from 'formik';
import React, {useState} from 'react';
import {
  KeyboardTypeOptions,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

interface IFormikInputProps extends TextInputProps {
  label?: string;
  name: string;
  isRequired?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  keyboardType?: KeyboardTypeOptions;
  editable?: boolean;
}

const FormikInput: React.FC<IFormikInputProps> = ({
  label,
  isRequired = false,
  name,
  containerStyle,
  labelStyle,
  keyboardType = 'default',
  editable = true,
  secureTextEntry,
  inputContainerStyle,
  ...props
}) => {
  const [field, meta, helpers] = useField(name);
  const [visible, setVisible] = useState<boolean>(!secureTextEntry);

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text style={[styles.label, labelStyle]}>
          {label} {isRequired && <Text style={styles.requiredAsterisk}>*</Text>}
        </Text>
      )}

      <View
        style={[
          meta.touched && meta.error
            ? styles.inputErrorContainer
            : styles.inputContainer,
          inputContainerStyle,
          !editable && styles.disabledContainer,
        ]}>
        <TextInput
          {...props}
          value={field.value}
          onChangeText={helpers.setValue}
          onBlur={() => helpers.setTouched(true)}
          style={[styles.input, props.style]}
          secureTextEntry={secureTextEntry && !visible}
          keyboardType={keyboardType}
          editable={editable}
          placeholderTextColor={colors.lightGray}
          accessibilityLabel={label}
        />
        {secureTextEntry && (
          <Pressable
            onPress={() => setVisible(!visible)}
            style={styles.iconContainer}>
            <VectorIcons.IonIcon
              name={visible ? 'eye-outline' : 'eye-off-outline'}
              color={colors.primary}
              size={20}
            />
          </Pressable>
        )}
      </View>

      {/* Error Section */}

      {meta.touched && meta.error && (
        <Text style={styles.errorText}>{meta.error}</Text>
      )}
    </View>
  );
};

export default FormikInput;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
  label: {
    fontSize: 16,
    fontFamily: fonts.SFPRODISPLAY_MEDIUM,
    color: colors.primaryDark,
    marginBottom: 5,
  },
  requiredAsterisk: {
    color: 'red',
  },
  inputContainer: {
    height: 48,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.darkBoder,
  },
  inputErrorContainer: {
    height: 48,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    // backgroundColor: colors.transparentRed,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.red,
  },
  disabledContainer: {
    backgroundColor: colors.lightGray,
  },
  input: {
    flex: 1,
    fontFamily: fonts.SFPRODISPLAY_MEDIUM,
    color: colors.primary,
    fontSize: 14,
    height: 40,
    borderRadius: 10,
  },
  iconContainer: {
    marginLeft: 8,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
});
