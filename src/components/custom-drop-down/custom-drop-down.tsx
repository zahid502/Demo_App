import {colors, fonts} from '@constants';
import {useField} from 'formik';
import React, {useState} from 'react';
import {
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import DropDownPicker, {ItemType} from 'react-native-dropdown-picker';

type PickerItem = {
  label: string;
  value: string;
};

type DropDownProps = {
  label?: string;
  name: string;
  style?: StyleProp<ViewStyle>;
  items: Array<PickerItem>;
  placeholder?: string;
  isReset?: boolean;
  dropDownContainerStyle?: StyleProp<ViewStyle>;
  listItemContainerStyle?: StyleProp<ViewStyle>;
  dropDownStyle?: StyleProp<ViewStyle>;
  selectedValue?: any;
  setSelectedValue?: any;
  onValueChange: (item: ItemType<any>) => void;
  placeholderStyle?: StyleProp<TextStyle>;
  textStyle?: StyleProp<TextStyle>;
  searchable?: boolean;
};

const CustomDropDown: React.FC<DropDownProps> = ({
  label,
  name,
  style,
  items,
  placeholder,
  onValueChange,
  dropDownStyle,
  selectedValue,
  setSelectedValue,
  isReset,
  placeholderStyle,
  textStyle,
  searchable,
  dropDownContainerStyle,
  listItemContainerStyle,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [field, meta] = useField(name);

  return (
    <View style={[styles.wrapper, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          Platform.OS === 'ios'
            ? styles.dropDownIOSContainer
            : styles.dropDownAndroidContainer,
        ]}>
        <DropDownPicker
          listMode={'SCROLLVIEW'}
          scrollViewProps={{
            nestedScrollEnabled: true,
          }}
          closeOnBackPressed={true}
          closeAfterSelecting={true}
          searchable={searchable}
          autoScroll={true}
          items={items}
          searchPlaceholder={'Search...'}
          searchContainerStyle={styles.searchContainerStyle}
          searchTextInputStyle={{
            borderWidth: 0,
          }}
          open={dropdownOpen}
          value={isReset ? placeholder : selectedValue}
          setValue={setSelectedValue}
          setOpen={setDropdownOpen}
          onSelectItem={onValueChange}
          placeholder={placeholder}
          containerStyle={{minHeight: 48}} // Ensures height of 48
          style={[
            meta.touched && meta.error
              ? styles.errorContainer
              : styles.container,
            dropDownStyle,
          ]}
          placeholderStyle={[styles.placeholderStyle, placeholderStyle]}
          textStyle={textStyle ?? null}
          dropDownContainerStyle={[
            styles.dropDownContainerStyle,
            dropDownContainerStyle,
          ]}
          listItemContainerStyle={[
            styles.listItemContainerStyle,
            listItemContainerStyle,
          ]}
          selectedItemContainerStyle={styles.selectedItemContainerStyle} // Custom background for selected item
          selectedItemLabelStyle={styles.selectedItemLabelStyle} // Custom label style for selected item
        />
      </View>
      {meta.touched && meta.error ? (
        <Text style={styles.errorText}>{meta.error}</Text>
      ) : null}
    </View>
  );
};

export default CustomDropDown;

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontFamily: fonts.SFPRODISPLAY_MEDIUM,
    color: colors.primaryDark,
    marginBottom: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  dropDownIOSContainer: {
    zIndex: 1,
  },
  dropDownContainerStyle: {
    borderColor: colors.lightBorder,
    position: 'relative', // to fix scroll issue ... it is by default 'absolute'
    top: 0, // to fix gap between label box and container
  },
  container: {
    height: 48,
    zIndex: 1000,
    borderWidth: 1,
    borderColor: colors.darkBoder,
    borderRadius: 10,
  },
  errorContainer: {
    height: 48,
    zIndex: 1000,
    borderWidth: 1,
    backgroundColor: colors.transparentRed,
    borderColor: colors.red,
    borderRadius: 10,
  },
  searchContainerStyle: {
    height: 35,
    padding: 0,
  },
  listItemContainerStyle: {
    borderBottomWidth: 0.5,
    borderBottomColor: colors.lightBorder,
    borderTopColor: colors.lightBorder,
    paddingHorizontal: 2,
    marginHorizontal: 10,
  },
  placeholderStyle: {
    color: colors.lightGray,
  },
  selectedItemContainerStyle: {},
  selectedItemLabelStyle: {
    fontFamily: fonts.SFPRODISPLAY_MEDIUM,
  },
  dropDownAndroidContainer: {},
});
