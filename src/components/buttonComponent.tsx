import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

type ButtonComponentProps = {
  text?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
};

const ButtonComponent = (props: ButtonComponentProps) => {
  const {text, style, textStyle, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, style]}>
        <Text style={[styles.buttonText, textStyle]}>{text || 'press me'}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#252250a0',
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 7,
    padding: 7,
  },
});

export default ButtonComponent;