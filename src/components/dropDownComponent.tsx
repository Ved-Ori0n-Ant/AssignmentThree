import React from 'react';
import {StyleProp, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

type DropDownProps = {
  data: any[];
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  dropdownStyle?: StyleProp<ViewStyle>;
  onSelect?: () => void;
};

const DropDown = (props: DropDownProps) => {
  const {data, onSelect, style, textStyle, dropdownStyle} = props;
  return (
    <ModalDropdown
      options={data}
      style={[styles.container, style]}
      textStyle={[styles.text, textStyle]}
      dropdownStyle={[styles.dropdwonContainer, dropdownStyle]}
      dropdownTextStyle={[styles.dropdownText]}
      onSelect={onSelect}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 3,
    borderColor: 'black',
    borderBottomWidth: 1.5,
    borderRightWidth: 0.75,
    borderBottomEndRadius: 4,
    alignSelf: 'baseline',
    backgroundColor: 'pink'
  },
  text: {fontSize: 20, fontWeight: 'bold'},
  dropdwonContainer: {
    borderColor: 'black',
    borderWidth: 1,
  },
  dropdownText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default DropDown;