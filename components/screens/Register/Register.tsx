import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native"
import { CustomInput } from "../../CustomInput/CustomInput";
import { CustomButton } from "../../CustomButton/CustomButton";
import RNPickerSelect from "react-native-picker-select";
import { useNavigation } from "@react-navigation/native"
import { StackTypes } from "../../routes/AppNavigator"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../src/config/firebase";
import { doc, setDoc } from 'firebase/firestore';



export const Register: React.FC = () => {

  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [telefone, setTelefone] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [ra, setRA] = useState("");
  const [cpnj, setCPNJ] = useState("");
  const [progresso, setProgresso] = useState(0);
  const [empregado, setEmpregado] = useState(true);
  const [turma, setTurma] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [userID, setUserUid] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");


  const navigation = useNavigation<StackTypes>();
  const handleSignUp = async () => {
    try {
      // Crie o usuário no Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setUserUid(user.uid);
      // Salve outras informações do usuário na coleção "users"

      await setDoc(doc(db, "users", user.uid), {
        ra,
        cpnj,
        cpf,
        dataInicio,
        dataNascimento,
        email,
        empregado,
        nome,
        progresso,
        telefone,
        turma,
        userID
      });

      console.log("Usuário cadastrado com sucesso:", user);
      navigation.navigate("Tab")
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
    }
  };

  const handleJob = (value: string) => {
    if(value === "Sim") {
      setEmpregado(true)
    }
    else {
      setEmpregado(false)
    }
    console.log(empregado)
  }

  const pickerStyles = {
    inputIOS: styles.pickerInput,
    inputAndroid: styles.pickerInput,
    placeholder: { color: "#868686" },
  };

  return (
  <ScrollView contentContainerStyle={styles.wrapper}>

      <View style={styles.wrapper}>

    <View style={styles.inputContainer}>
      <CustomInput 
         height={45} 
         width={340} 
         placeholder="RA"
         onChangeText={(text) => setRA(text)}
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
        placeholder="CPNJ da empresa"
        onChangeText={(text) => setCPNJ(text)}
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
        placeholder="Data de Início"
        onChangeText={(text) => setDataInicio(text)}
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
          placeholder="Data de nascimento"
          onChangeText={(text) => setDataNascimento(text)}
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

      <View style={styles.dropdown}>
        <RNPickerSelect
          onValueChange={(value) => handleJob(value)}
          items={[
            { label: "Sim", key: "Sim", value: "Sim" },
            { label: "Não", key: "Não", value: "Não" }]}
            placeholder={{ label: "Empregado", value: null}}
            style={pickerStyles} />
        </View>

        
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
        placeholder="Progresso (digite um número de 0 a 100)"
        onChangeText={(text) => setProgresso(Number(text))}
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
        placeholder="Turma"
        onChangeText={(text) => setTurma(text)}
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
  </ScrollView>
  )
}
const styles = StyleSheet.create({

  scroll: {
    backgroundColor: "#000"
  },

  wrapper: {
    backgroundColor: "#000000",

    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40
  },

  containerText: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 32,
  },

    inputContainer: {
      flex: 6,
      marginBottom: 50,
      gap: 20
    },

    dropdown: {
      width: 340,
      height: 45,
      borderWidth: 1,
      borderColor: "#868686",
      borderRadius: 10,
      
    },
    pickerInput: {
      borderWidth: 1,
      borderColor: "#868686",
      color: "#868686",
      bottom: 7
    },
  })
