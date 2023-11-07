import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface Props {
    height?: number
    width: number;
    borderColor?: string;
    border?: number;
    borderRadius?: number;
    padding?: number;
    radius?: number;
    color?: string;
    backgroundColor?: string;
    placeholder?: string;
    placeholderColor: string;
    mode?: any;
    password?: boolean;
}


export const CustomInput: React.FC<Props> = ({
    height,
    width,
    borderColor,
    border,
    padding,
    radius,
    color,
    backgroundColor,
    placeholder,
    placeholderColor,
    mode,
    password

}) => {
const styles = StyleSheet.create({
input: {
    height: height,
    width: width,
    borderColor: borderColor,
    borderWidth: border,
    borderRadius: radius,
    padding: padding,
    backgroundColor: backgroundColor,
    color: color
  }
})

return (
    <TextInput style={styles.input} 
               placeholder={placeholder}
               placeholderTextColor={placeholderColor}
               secureTextEntry={password}
               keyboardType={mode}/>      
  )
}
