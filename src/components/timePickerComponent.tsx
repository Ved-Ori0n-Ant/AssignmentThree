import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import React, {useState} from 'react';
import {StyleProp, Text, TouchableOpacity, View, ViewStyle} from 'react-native';

type TimePickerComponentProps = {
  style?: StyleProp<ViewStyle>;
};

const TimePickerComponent = (props: TimePickerComponentProps) => {
  const [time, setTime] = useState(new Date());

  const onChange = (event: any, selecteTime: any) => {
    const currentTime = selecteTime;
    setTime(currentTime);
  };

  const showTimepicker = () => {
    DateTimePickerAndroid.open({
      value: time,
      onChange,
      is24Hour: true,
      mode: 'time',
    });
  };

  return (
    <View style={props.style}>
      <TouchableOpacity onPress={showTimepicker}>
        <Text>{time.toLocaleTimeString()}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TimePickerComponent;