import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

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
  onChangeText?: (text: string) => void;
  children?: React.ReactElement;
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
  password,
  onChangeText,
  children,

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
      color: color,
      justifyContent: "space-between",
      display: "flex",
      flexDirection: "row",
    },
    inputAndChildren: {
      width: width * 0.8,
      backgroundColor: backgroundColor,
      color: color,
    }
  })

  return (
    <>
      {children != undefined ?
        <View style={styles.input}>
          <TextInput
            style={styles.inputAndChildren}
            placeholder={placeholder}
            placeholderTextColor={placeholderColor}
            secureTextEntry={password}
            keyboardType={mode}
            onChangeText={onChangeText}></TextInput>
          {children}
        </View>
        :
        <TextInput style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          secureTextEntry={password}
          keyboardType={mode}
          onChangeText={onChangeText} />
      }
    </>
  )

}
