import React, { useState } from "react";
import { View, StyleSheet } from "react-native"
import { CustomInput } from "../../CustomInput/CustomInput";
import { CustomText } from "../../CustomText/CustomText";
import { CustomButton } from "../../CustomButton/CustomButton";
import RNPickerSelect from "react-native-picker-select";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../src/config/firebase";
import { doc, setDoc } from 'firebase/firestore';

export const Register:React.FC = () => {

  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [telefone, setTelefone] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [sexo, setSexo] = useState("");
  const [userID, setUserUid] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  const handleSignUp = async () => {
    try {
      // Crie o usuário no Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setUserUid(user.uid);
      // Salve outras informações do usuário na coleção "users"

      await setDoc(doc(db, "users", user.uid), {
        email,
        telefone,
        nome,
        cpf,
        sexo,
        dataNascimento,
        userID
      });

      console.log("Usuário cadastrado com sucesso:", user);
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
    }
  };

  const pickerStyles = {
    inputIOS: styles.pickerInput,
    inputAndroid: styles.pickerInput,
    placeholder: { color: "#868686"},
  };

  return (
  <View style={styles.wrapper}>

    <View style={styles.containerText}>
      <CustomText text="Criar conta" fontWeight="bold" size={20} color="#FFFFFF"/>
      <CustomText text="Preencha o formulário abaixo para criar a conta" color="#868686" />
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
        placeholder="Telefone"
        onChangeText={(text) => setTelefone(text)}
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
        placeholder="Nome completo"
        onChangeText={(text) => setNome(text)}
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
        placeholder="CPF"
        onChangeText={(text) => setCpf(text)}
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

        <View style={styles.gender}>
        <RNPickerSelect
          onValueChange={(value) => setSexo(value)}
          items={[
            { label: "Masculino", key: "Masculino", value: "Masculino" },
            { label: "Feminino", key: "Feminino", value: "Feminino" },
            { label: "Outros", key: "Outros",  value: "Outros"}]}
            placeholder={{ label: "Sexo", value: null}}
            style={pickerStyles} />
        </View>

      <CustomInput 
        height={45}
        width={340}
        placeholder="Data de nascimento"
        onChangeText={(text) => setDataNascimento(text)}
        placeholderColor="#868686"
        color="#e9dfdf"
        border={1}
        borderColor="#868686"
        padding={15}
        radius={10}
        />
        <CustomButton title="Criar" onPress={handleSignUp} border={1} bgColor="grey" color="#FFFFFF" width={340} padding={16} radius={12} size={16}/>
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
      marginTop: 50,
      marginBottom: 30,
      gap: 30
    },

    inputContainer: {
      flex: 6,
      marginBottom: 50,
      gap: 20
    },
    gender: {
      width: 340,
      height: 45,
      borderWidth: 1,
      borderColor: "#868686",
      borderRadius: 10
    },
    pickerInput: {
      borderWidth: 1,
      borderColor: "#868686",
      color: "#868686",
    },
  })
