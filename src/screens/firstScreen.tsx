import React, { useState } from "react";
import { StyleSheet, TextInput, ActivityIndicator, View, Alert, Text, FlatList, ScrollView } from "react-native";
import TimePickerComponent from "../components/timePickerComponent";
import ImagePickerComponent from "../components/imagePickerComponent";
import ButtonComponent from "../components/buttonComponent";
import DropDown from "../components/dropDownComponent";
import RadioButtonComponent from "../components/radioButton";
//import CheckBoxComponent from "../components/checkboxComponent";

const dropdownData = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
    'Option 7',
    'Option 8',
    'Option 9',
];

const radioData = [
    'Scalar',
    'Vector',
    'Tensor',
];

interface Navigation {
    navigate(destination: String): void;
}

const FormComponent = ({navigation}: {navigation: Navigation}) => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [show, setShow] = useState(false);

    const submitFun: any = () => {
        setShow(true)
        setTimeout(() => {
            setShow(false)
            Alert.alert('Success!')
        }, 5000);
    }

    const validateFun: any = () => {
        if (!name.trim()) {
            Alert.alert('Name Is Missing!');
            return false;
        }
        else if (!email.trim()) {
            Alert.alert('Email Is Missing!')
            return false;
          }
          else if(email.trim()){
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
              submitFun()
              return true;
            } else {
              Alert.alert('Enter valid Email');
              return false;
            }
          }
          submitFun();
    }
    
    return(
        <ScrollView>
            {/* Simple input */}
            <View style = {styles.component}>
                <TextInput 
                    style = {styles.textInputComponent} 
                    placeholder = "Enter your name!" 
                    onChangeText = {(val) => setName(val)}
                />
            </View>
            <View style = {styles.component}>
                <TextInput 
                    style = {styles.textInputComponent} 
                    placeholder = "Enter your email!" 
                    onChangeText = {(val) => setEmail(val)}
                />
            </View>

            {/* Dropdown input */}
            <View style = {styles.component}>
                <DropDown data = {dropdownData}/>
            </View>

            {/* Radio input */}
            <View style = {styles.component}>
                <RadioButtonComponent data={radioData} onClickRadio = {() => {}}/>
            </View>

            {/* Checkbox input */}
            {/* <View style = {styles.component}>
                <CheckBoxComponent data={[
                    {text: 'Speed', isChecked: true},
                    {text: 'Velocity', isChecked: false},
                    {text: 'Pressure', isChecked: false},
                    ]}
                    textstyle = {styles.text}
                />
            </View> */}

            {/* Time picker */}
            <View style = {styles.component}>
                <Text style = {styles.text}>Current Time</Text>
                <TimePickerComponent style = {{marginLeft: 15}} />
            </View>

            {/* Image picker */}
            <View style = {styles.component}>
                <Text style = {styles.text}>Upload image</Text>
                <ImagePickerComponent
                    fileOption = {{mediaType: 'photo'}}
                    buttonTextStyle = {{color: 'black'}}
                />
            </View>

            {/* Submit button */}
            <ButtonComponent 
                style = {styles.button}
                text = " Submit "
                textStyle = {{color: "white"}}
                onPress = {() => validateFun()}
                //onPress = {() => {}}
            />

            {/* Spinner */}
            <ActivityIndicator size={'large'} animating = {show}/>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    component: {
        margin: 15
    },
    button: {
        backgroundColor: "#1518f0",
        alignSelf: "center",
        borderWidth: 1,
    },
    text: {
        fontSize: 13,
        fontWeight: "bold",
        color: "crimson",
        marginBottom: 3,
    },
    textInputComponent: {
        borderBottomWidth: 1.5
    },
});

export default FormComponent;