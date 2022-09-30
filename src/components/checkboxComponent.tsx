import React, {useState} from 'react';
import {StyleProp, StyleSheet, Text, TextStyle, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

type CheckBoxComponentProps = {
  data: {text: string; isChecked: boolean}[];
  textstyle?: StyleProp<TextStyle>;
  onValueChange?: () => void;
};

const CheckBoxComponent = (props: CheckBoxComponentProps) => {
  const {data, textstyle} = props;
  return (
    <View style={styles.container}>
      {data.map((checkbox, key) => {
        const [isEnable, setIsEnable] = useState(checkbox.isChecked);
        const toggleCheckbox = () => setIsEnable(!isEnable);
        return (
          <View key={`${key}`} style={styles.container}>
            <CheckBox
              disabled={false}
              value={isEnable}
              onValueChange={() => toggleCheckbox()}
            />
            <Text style={[textstyle, styles.checkBoxText]}>
              {checkbox.text}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  checkBoxText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {flexDirection: 'row', alignItems: 'center'},
});

export default CheckBoxComponent;