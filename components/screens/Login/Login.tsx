import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native"
import { CustomInput } from "../../CustomInput/CustomInput";
import { CustomText } from "../../CustomText/CustomText";
import { CustomButton } from "../../CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native"
import { StackTypes } from "../../routes/AppNavigator"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../src/config/firebase";
import { Feather } from '@expo/vector-icons';

export const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [show, setShow] = useState(false)
  const [errorLogin, setErrorLogin] = useState(false);
  const navigation = useNavigation<StackTypes>();


  auth;
  const login = () => {
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigation.navigate("Tab")
        // ...
      })
      .catch((error) => {
        setErrorLogin(true)
        const errorCode = error.code;
        const errorMessage = error.message
        console.log("login incorreto" + errorCode + errorMessage);
      });
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.containerText}>
        <CustomText text="Bem-vindo!" color="#FFFFFF" size={18} />
      </View>

      <View style={styles.inputContainer}>
        <CustomInput
          height={48}
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
          height={48}
          width={340}
          password={!show}
          placeholder="Senha"
          onChangeText={(text) => setPass(text)}
          placeholderColor="#868686"
          color="#e9dfdf"
          border={1}
          borderColor="#868686"
          padding={15}
          radius={10}
        >
          <TouchableOpacity onPress={() => setShow(!show)}>
            {
              !show ?
                <Feather name="eye-off" size={18} color="#fff" />
                :
                <Feather name="eye" size={18} color="#fff" />
            }
          </TouchableOpacity>

        </CustomInput>
        <CustomButton title="Entrar" border={1} bgColor="#4E4E53" color="#FFFFFF" width={340} height={48} padding={12} radius={12} size={16} marginTop={30} onPress={login} />
        <CustomButton title="Esqueceu a senha?" border={1} color="#77767E" width={340} padding={16} radius={12} size={16} />
        {errorLogin && (
          <CustomText text="Senha ou email incorretos. Tente novamente" size={16} color="red" />
        )}
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
