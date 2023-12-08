import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native"
import { CustomInput } from "../../CustomInput/CustomInput";
import { CustomText } from "../../CustomText/CustomText";
import { CustomButton } from "../../CustomButton/CustomButton";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from "../../../src/config/firebase";
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { LinearGradient } from "expo-linear-gradient"

export const ReportsForms: React.FC = () => {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [userUid, setUserUid] = useState("");

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserUid(user.uid);
      }
    });

    console.log("userid " + userUid);
    // Cleanup function
    return () => unsubscribe();
  }, []);

  const geraRelatorio = async () => {
    try {
      await addDoc(collection(db, "Reports"), {
        nome,
        email,
        telefone,
        dataNascimento,
        userUid
      });
      console.log(userUid)
    } catch (error) {
      console.error("Erro ao gerar relatorio:", error);
    }
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView>


        <View style={styles.containerText}>
          <CustomText text="Gerar Relatórios" fontWeight="bold" size={40} color="#FFFFFF" />
        </View>

        <View style={styles.inputContainer}>
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
            placeholder="Data de nascimento"
            onChangeText={(text) => setDataNascimento(text)}
            placeholderColor="#868686"
            color="#e9dfdf"
            border={1}
            borderColor="#868686"
            padding={15}
            radius={10}
          />
          <LinearGradient colors={["#F65151", "#A33333"]} style={styles.button}>
            <CustomButton onPress={geraRelatorio} title="Gerar Relatório" width={300} padding={16} size={16} color="#FFFFFF" />
          </LinearGradient>
        </View>
      </ScrollView>

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
  button: {
    width: 300,
    alignSelf: "center",
    borderRadius: 8
  },
})
