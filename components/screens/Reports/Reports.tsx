import React, { useState, useEffect } from "react";
import { CustomText } from "../../CustomText/CustomText";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../src/config/firebase";
import { useNavigation } from "@react-navigation/core";
import { StackTypes } from "../../routes/AppNavigator";

interface Report {
  nome: string;
}

export const Reports: React.FC = () => {
  const [userUid, setUserUid] = useState("");
  const [documentFound, setDocumentFound] = useState<string | null>(null);
  const [reportsWithId, setReportsWithId] = useState<any[]>([]);
  const navigation = useNavigation<StackTypes>()

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserUid(user.uid);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    if (userUid) {
      checkDocument();
    }

    console.log(userUid);
  }, [userUid]);

  const checkDocument = async () => {
    try {
      const querySnapshot = await getDocs(query(collection(db, 'Reports'), where('userUid', '==', userUid)));
      console.log("Esse é o UID " + querySnapshot);
      if (!querySnapshot.empty) {
        const reports = querySnapshot.docs.map((doc) => {
          const id = doc.id;
          const data = doc.data();
          return { id, ...data };
        });
        console.log(reports);

        setReportsWithId(reports);
        setDocumentFound("Existe");
      } else {
        setDocumentFound("Não existe");
      }
    } catch (error) {
      console.error("Erro ao verificar documentos na coleção:", error);
    }
  };

  useEffect(() => {
    checkDocument();
  }, [userUid]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <CustomText text="Relatórios" fontWeight="bold" color="#FFFFFF" size={34} />
        </View>
        {documentFound === "Existe" ? (
          // Display the reports if they exist
          <View style={styles.reportsContainer}>
            <CustomText text="Nomes" color="#FFFFFF" size={24} fontWeight="bold" />
            <View style={styles.studentsContainer}>
                {reportsWithId.map((report) => (
                <TouchableOpacity key={report.id} onPress={() => navigation.navigate("ReportsPerformance", report)}>
                  <CustomText key={report.id} text={report.nome} color="#FFFFFF" size={17} fontWeight="bold" backgroundColor="#7B4296" padding={15} radius={8} />
                </TouchableOpacity>
                ))}
            </View>
        </View>

        ) : (
          // Display a message if no reports are found
          <View style={styles.NoReportsContainer}>
            <Image source={require("../../../assets/icone-relatorio.png")} style={styles.image} />
            <CustomText text="Nenhum relatório" color="#FFFFFF" size={34} fontWeight="bold" />
            <CustomText text="Você ainda não gerou nenhum relatório de desempenho individual" size={17} color="#9A99A2" />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#000000",
        flex: 1,
        justifyContent: "center"
    },

    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 5
    },

    image: {
        width: 400,
        height: 100
    },

    button: {
        width: 300,
        alignSelf: "center",
        borderRadius: 8
    },
    
    buttonContainer: {
        alignSelf: "center",
        position: "absolute",
        bottom: 150
    },

    titleContainer: {
        alignSelf: "flex-start",
        paddingLeft: 10,
        bottom: 150
    },

    NoReportsContainer: {
      alignItems: "center"
    },

    roundedLine: {
      height: 0.5,
      width: "100%",
      backgroundColor: "#77767E",
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5
    },

    studentsContainer: {
      marginTop: 10,
      width: 340,
      borderRadius: 8,
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 15,
      gap: 20
    },

    reportsContainer: {
      bottom: 120
    }
})