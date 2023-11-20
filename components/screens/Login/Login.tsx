import React, { useState } from "react";
import { View, StyleSheet } from "react-native"
import { CustomInput } from "../../CustomInput/CustomInput";
import { CustomText } from "../../CustomText/CustomText";
import { CustomButton } from "../../CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native"
import { StackTypes } from "../../routes/AppNavigator"


export const Login:React.FC = () => {
  const navigation = useNavigation<StackTypes>();

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../src/config/firebase";


export const Login:React.FC = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
    // const [errorLogin, setErrorLogin] = useState("");
    auth;
    const login = () => {
                signInWithEmailAndPassword(auth, email, pass)
                  .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    // ...
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message
                    console.log("login incorreto" + errorCode + errorMessage);
                  });
    }
    
  return (
  <View style={styles.wrapper}>
        <View style={styles.containerText}>
            <CustomText text="Entrar" fontWeight="bold" size={20} color="#FFFFFF"/>
            <CustomText text="Bem-vindo!" color="#FFFFFF" />
            </View>

            <View style={styles.inputContainer}>
            <CustomInput 
                height={45} 
                width={340} 
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
                placeholderColor="#868686" 
                color="#e9dfdf" 
                border={1} 
                borderColor="#868686" 
                padding={15}
                radius={10}
                />
            
            <CustomInput 
                height={45} 
                width={340} 
                placeholder="Senha"
                onChangeText={(text) => setPass(text)}
                placeholderColor="#868686" 
                color="#e9dfdf" 
                border={1} 
                borderColor="#868686"
                padding={15}
                radius={10}
                />
                <CustomButton title="Entrar" border={1} bgColor="grey" color="#FFFFFF" width={340} padding={16} radius={12} size={16} marginTop={30} onPress={() => navigation.navigate("Tab")}/>
                <CustomButton title="Entrar" border={1} bgColor="grey" color="#FFFFFF" width={340} padding={16} radius={12} size={16} marginTop={30} onPress={login}/>
                <CustomButton title="Esqueceu a senha?" border={1} color="#77767E" width={340} padding={16} radius={12} size={16}/>
            </View>
        </View>
  )
}
const styles = StyleSheet.create({

    wrapper: {
    backgroundColor: "#000000",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center"
    },

    containerText: {
      flex: 1,
      alignItems: "center",
      marginTop: 100,
      gap: 50
    },

    inputContainer: {
      flex: 3,
      gap: 20
    },

  })
