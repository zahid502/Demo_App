import {DateUtil} from '@app-utils/date-util';
import {colors, fonts, VectorIcons} from '@constants';
import {useField} from 'formik';
import React, {useState} from 'react';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

//--------------------------------------------------------------------
type DatePickerType = 'date' | 'time' | 'datetime';

interface ICustomDatePickerProps {
  label?: string;
  name: string;
  isRequired?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  placeholder?: string;
  showIcon?: boolean;
  maximumDate?: Date;
  value?: Date | null;
  setDate: (date: any) => void;
  type?: DatePickerType;
  disabled?: boolean;
  callBack?: (date: Date) => void;
}

//--------------------------------------------------------------------
const CustomDatePicker: React.FC<ICustomDatePickerProps> = ({
  label,
  isRequired,
  name,
  containerStyle,
  inputContainerStyle,
  labelStyle,
  placeholder = 'Select Date',
  showIcon = true,
  maximumDate,
  value,
  setDate,
  type = 'date',
  disabled = false,
  callBack,
}) => {
  const [field, meta] = useField(name);
  const [open, setOpen] = useState<boolean>(false);

  const handleDateChange = (date: Date) => {
    setDate(date);
    if (callBack) callBack(date);
  };

  return (
    <>
      {label && (
        <Text style={styles.requiredInput}>
          {isRequired && '*'}
          <Text style={[styles.label, labelStyle]}>{label}</Text>
        </Text>
      )}
      <View style={[styles.container, containerStyle]}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => !disabled && setOpen(true)}
          disabled={disabled}
          style={[
            meta.touched && meta.error
              ? styles.errorContainer
              : styles.inputContainer,
            inputContainerStyle,
            disabled && {backgroundColor: colors.lightestGray},
          ]}>
          <Text
            style={[
              value ? styles.input : styles.inputPlaceholder,
              {
                flex: 1,
                color: disabled
                  ? colors.gray
                  : value
                  ? colors.primary
                  : colors.lightGray,
              },
            ]}>
            {value
              ? DateUtil.getInstance().formatForDate(value.toString())
              : placeholder}
          </Text>
          {showIcon && (
            <Pressable
              onPress={() => !disabled && setOpen(true)}
              disabled={disabled}>
              <VectorIcons.EntypoIcon
                name={open ? 'chevron-thin-up' : 'chevron-thin-down'}
                color={disabled ? colors.gray : colors.black}
                style={styles.icon}
                size={15}
              />
            </Pressable>
          )}
        </TouchableOpacity>
        {meta.touched && meta.error ? (
          <Text style={styles.errorText}>{meta.error}</Text>
        ) : null}
      </View>

      {/* DatePicker modal */}
      <DatePicker
        modal
        open={open}
        date={value || new Date()}
        mode={type} // Can be 'date', 'time', or 'datetime'
        maximumDate={maximumDate}
        onConfirm={date => {
          setOpen(false);
          handleDateChange(date);
        }}
        onCancel={() => setOpen(false)}
      />
    </>
  );
};

export default CustomDatePicker;

//--------------------------------
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
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
  errorContainer: {
    height: 48,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.transparentRed,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.red,
  },
  label: {
    fontSize: 16,
    fontFamily: fonts.SFPRODISPLAY_MEDIUM,
    color: colors.primaryDark,
  },
  requiredInput: {
    color: colors.primaryDark,
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    fontFamily: fonts.SFPRODISPLAY_MEDIUM,
    fontSize: 14,
  },
  inputPlaceholder: {
    fontFamily: fonts.SFPRODISPLAY_MEDIUM,
    fontSize: 14,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  icon: {marginLeft: 5},
});
