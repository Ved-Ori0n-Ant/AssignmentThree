import React, {useState} from 'react';
import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type RadioButtonComponentProps = {
  data: string[];
  onClickRadio: (event?: GestureResponderEvent) => void;
};

const RadioButtonComponent = (props: RadioButtonComponentProps) => {
  const {data, onClickRadio} = props;
  const [active, setActive] = useState(100);
  const RadioClicked = (key: number) => {
    setActive(key);
  };
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flexDirection: 'row'}}>
      {data.map((text, index) => {
        return (
          <View key={`${index}`} style={styles.container}>
            <TouchableOpacity
              onPressOut={() => RadioClicked(index)}
              onPress={() => onClickRadio()}>
              <View style={styles.container} key={`view_${index}`}>
                <Image
                  key={`image_${index}`}
                  source={
                    active === index
                      ? {
                          uri: 'https://cdn-icons-png.flaticon.com/512/6941/6941944.png',
                        }
                      : {
                          uri: 'https://cdn-icons-png.flaticon.com/512/7613/7613822.png',
                        }
                  }
                  style={styles.roundButton}
                />
                <Text>{text}</Text>
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default RadioButtonComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  roundButton: {
    height: 20,
    width: 20,
    margin: 5,
    marginLeft: 20,
    borderRadius: 100,
  },
});
