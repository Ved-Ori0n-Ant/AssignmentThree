import React, {useState} from 'react';
import {
  Alert,
  Image,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
  ImageProps,
} from 'react-native';
import ButtonComponent from './buttonComponent';
import {
  CameraOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';

type ImagePickerComponentProps = {
  fileOption: CameraOptions;
  style?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageProps>;
  buttonStyle?: StyleProp<ViewStyle>;
  buttonTextStyle?: StyleProp<TextStyle>;
};

const ImagePickerComponent = (props: ImagePickerComponentProps) => {
  const {fileOption, style, imageStyle, buttonStyle, buttonTextStyle} = props;
  const [isClicked, setIsClicked] = useState(false);
  const [imagePath, setImagePath] = useState('');
  const camera = () => {
    launchCamera(fileOption, callback => {
      if (callback.didCancel) {
        Alert.alert('Cancelled image picker');
      } else if (callback.errorCode) {
        Alert.alert(callback.errorCode);
      } else if (callback.assets) {
        console.log(callback.assets);
        setImagePath(callback.assets[0].uri!);
        setIsClicked(false);
      } else {
        console.log(callback);
      }
    });
  };

  const storage = () => {
    launchImageLibrary(fileOption, callback => {
      if (callback.didCancel) {
        Alert.alert('Cancelled image picker');
      } else if (callback.errorCode) {
        Alert.alert(callback.errorCode);
      } else if (callback.assets) {
        console.log(callback.assets);
        setImagePath(callback.assets[0].uri!);
        setIsClicked(false);
      } else {
        console.log(callback);
      }
    });
  };
  return (
    <View>
      {isClicked ? (
        <>
          <View style={[styles.container, style]}>
            <ButtonComponent
              style={buttonStyle}
              textStyle={buttonTextStyle}
              text="Upload From Camera"
              onPress={() => camera()}
            />
            <ButtonComponent
              style={buttonStyle}
              textStyle={buttonTextStyle}
              text="Upload From Gallary"
              onPress={() => storage()}
            />
          </View>
        </>
      ) : (
        <View style={{alignItems: 'baseline'}}>
          <ButtonComponent
            style={buttonStyle}
            textStyle={buttonTextStyle}
            text="Upload Image"
            onPress={() => setIsClicked(true)}
          />
          {imagePath !== '' ? (
            <Image
              source={{uri: imagePath}}
              style={[styles.image, imageStyle]}
            />
          ) : null}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {height: 200, width: 200},
  container: {flexDirection: 'column', alignItems: 'flex-start'},
});

export default ImagePickerComponent;