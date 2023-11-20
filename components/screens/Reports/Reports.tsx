import React, { useState, useEffect } from "react";
import { CustomText } from "../../CustomText/CustomText";
import { View, StyleSheet, Image } from "react-native";
import { CustomButton } from "../../CustomButton/CustomButton";
import { LinearGradient } from "expo-linear-gradient";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../src/config/firebase";

export const Reports: React.FC = () => {
  const [userUid, setUserUid] = useState("");
  const [documentFound, setDocumentFound] = useState<string | null>(null);
  const [reportsWithId, setReportsWithId] = useState<any[]>([]);

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
        <View>
            <CustomText text="Nomes" color="#FFFFFF" size={24} fontWeight="bold" />
            <View style={{ marginTop: 10 }}>
                {reportsWithId.map((report) => (
                <CustomText key={report.id} text={report.nome} color="#FFFFFF" size={17} />
                ))}
            </View>
        </View>

        ) : (
          // Display a message if no reports are found
          <View>
            <Image source={require("../../../assets/icone-relatorio.png")} style={styles.image} />
            <CustomText text="Nenhum relatório" color="#FFFFFF" size={34} fontWeight="bold" />
            <CustomText text="Você ainda não gerou nenhum relatório de desempenho individual" size={17} color="#9A99A2" />
          </View>
        )}
      </View>

      <View style={styles.buttonContainer}>
        <LinearGradient colors={["#F65151", "#A33333"]} style={styles.button}>
          <CustomButton title="Gerar Relatório" width={300} padding={16} size={16} color="#FFFFFF" />
        </LinearGradient>
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
        gap: 5,
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
    }
})