import React, { useEffect, useState } from "react"
import { View, StyleSheet, ScrollView } from "react-native"
import { CustomText } from "../../CustomText/CustomText"
import * as Progress from "react-native-progress"
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { CustomButton } from "../../CustomButton/CustomButton";
import { printToFileAsync } from "expo-print"
import { shareAsync } from "expo-sharing"
import { StackTypes } from "../../routes/AppNavigator";


export const ReportsPerformance: React.FC = () => {
    const [total, setTotal] = useState<number>();
    const [tasks, setTasks] = useState<number>()
    const [attendance, setAttendance] = useState<number>()
    const [cv, setCv] = useState<number>()
    const [userInfo, setUserInfo] = useState<number>()
    const [performance, setPerformance] = useState<number>()
    const navigation = useNavigation<StackTypes>();

    useEffect(() => {
        const generateRandomNumber = () => Math.floor(Math.random() * 100);

        setTasks(generateRandomNumber());
        setAttendance(generateRandomNumber());
        setCv(generateRandomNumber());
        setUserInfo(generateRandomNumber());
        // Definindo o valor de performance como a média calculada
    }, [])

    useEffect(() => {
        if (tasks !== undefined && attendance !== undefined && cv !== undefined && userInfo !== undefined) {
            const average = (tasks + attendance + cv + userInfo) / 4;
            setPerformance(Math.round(average));
}
    }, [tasks, attendance, cv, userInfo]);

const html = `
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Relatório de Desempenho</title>
        <style>
            body {
                background-color: #000000;
                color: #FFFFFF;
                padding: 25px;
                font-family: Arial, sans-serif;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            .card {
                background-color: #232326;
                width: 700px;
                height: 270px;
                border-radius: 10px;
                display: flex;
                align-items: center;
                margin-bottom: 15px;
            }

            .leftSide, .rightSide {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            .roundedLine {
                height: 90%;
                width: 0.5px;
                background-color: #77767E;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
            }

            .last-card {
                height: 265px;
                margin-top: 30px;
            }

            .content {
                margin-top: 35px;
            }

            
        </style>
    </head>
    <body>
        <div>
            <h1 style= "font-size: 50px;">Desempenho individual</h1>
        </div>

        <div class="content">
            <div class="card">
            <div class="leftSide">
                <span style="color: #FFFFFF; font-size: 56px; font-weight: bold;">${tasks}%</span>
                <span style="color: #77767E; font-size: 42px; font-weight: bold;">Tarefas</span>
            </div>
            <div class="roundedLine"></div>
            <div class="rightSide">
                <span style="color: #FFFFFF; font-size: 56px; font-weight: bold;">${attendance}%</span>
                <span style="color: #77767E; font-size: 42px; font-weight: bold;">Presença</span>
            </div>
        </div>

        <div class="card">
            <div class="leftSide">
                <span style="color: #FFFFFF; font-size: 56px; font-weight: bold;">${cv}%</span>
                <span style="color: #77767E; font-size: 42px; font-weight: bold; width: 50%;">Currículo concluído</span>
            </div>
            <div class="roundedLine"></div>
            <div class="rightSide">
                <span style="color: #FFFFFF; font-size: 56px; font-weight: bold;">${userInfo}%</span>
                <span style="color: #77767E; font-size: 42px; font-weight: bold;">Presença</span>
            </div>
        </div>

        <div class="card last-card">
            <div class="leftSide">
                <span style="color: #FFFFFF; font-size: 76px; font-weight: bold;">${performance}%</span>
                <span style="color: #77767E; font-size: 42px; font-weight: bold;">Desempenho total</span>
            </div>
        </div
    </body>
    </html>`;



const handlePDF = async () => {
    const file = await printToFileAsync({
        html: html,
        base64: false
    })
    await shareAsync(file.uri)
}

return (
    <View style={styles.wrapper}>
        <ScrollView>

            <View style={{ gap: 45 }}>
                <CustomText text="Desempenho individual" color="#FFFFFF" size={16} />
                <CustomText text={`teste`} color="#FFFFFF" fontWeight="bold" size={25} />
            </View>
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <View style={styles.leftSide}>
                        <CustomText text={`${tasks}%`} color={tasks && tasks > 50 ? "#04BE00" : "#F65151"} size={32} fontWeight="bold" />
                        <CustomText text="Tarefas concluídas" color="#77767E" />
                    </View>
                    <View style={styles.roundedLine} />
                    <View style={styles.rightSide}>
                        <CustomText text={`${attendance}%`} color={attendance && attendance > 50 ? "#04BE00" : "#F65151"} size={32} fontWeight="bold" />
                        <CustomText text="Presença" color="#77767E" />
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.leftSide}>
                        <CustomText text={`${cv}%`} color={cv && cv > 50 ? "#04BE00" : "#F65151"} size={32} fontWeight="bold" />
                        <CustomText text="Currículo concluído" color="#77767E" />
                    </View>

                    <View style={styles.roundedLine} />

                    <View style={styles.rightSide}>
                        <CustomText text={`${userInfo}%`} color={userInfo && userInfo > 50 ? "#04BE00" : "#F65151"} size={32} fontWeight="bold" />
                        <CustomText text="Informações de cadastro na plataforma" color="#77767E" textAlign="center" width={150} />
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.leftSide}>
                        <CustomText text={`${performance}%`} color={performance && performance > 50 ? "#04BE00" : "#F65151"} size={48} fontWeight="bold" />
                    </View>

                    <View style={styles.roundedLine} />

                    <View style={styles.rightSide}>
                        <CustomText text="Desempenho total" color="#77767E" size={20} width={120} textAlign="center" />
                    </View>
                </View>
            </View>

            <CustomText text="Média do estudante" marginTop={18} color="#FFFFFF" />

            <View style={styles.averageContainer}>
                <View>
                    <Progress.Bar color="#7B4296" progress={0.04} width={320} height={25} borderRadius={8} style={{
                        marginTop: 15,
                        marginLeft: 12
                    }} />
                    <View style={{
                        bottom: 25,
                        left: 20
                    }}>
                        <CustomText text="Desempenho > 95%:   1 aluno" color="#FFFFFF" />
                    </View>
                </View>

                <View>
                    <Progress.Bar color="#7B4296" progress={0.6} width={320} height={25} borderRadius={8} style={styles.averageBar}
                    />
                    <View style={{
                        bottom: 25,
                        left: 20
                    }}>
                        <CustomText text="Desempenho > 80%   28 alunos" color="#FFFFFF" />
                    </View>
                </View>
                <View>
                    <Progress.Bar color="#7B4296" progress={0.5} width={320} height={25} borderRadius={8} style={styles.averageBar} />
                    <View style={{
                        bottom: 25,
                        left: 20
                    }}>
                        <CustomText text="Desempenho > 60%   2 alunos" color="#FFFFFF" />
                    </View>
                </View>
                <View>
                    <Progress.Bar color="#7B4296" progress={0.4} width={320} height={25} borderRadius={8} style={styles.averageBar} />
                    <View style={{
                        bottom: 25,
                        left: 20
                    }}>
                        <CustomText text="Desempenho > 40%   6 alunos" color="#FFFFFF" />
                    </View>
                </View>
                <View>
                    <Progress.Bar color="#7B4296" progress={0} width={320} height={25} borderRadius={8} style={styles.averageBar} />
                    <View style={{
                        bottom: 25,
                        left: 20
                    }}>
                        <CustomText text="Desempenho > 20%   0 alunos" color="#FFFFFF" />
                    </View>
                </View>
                <View>
                    <Progress.Bar color="#7B4296" progress={0} width={320} height={25} borderRadius={8} style={styles.averageBar} />
                    <View style={{
                        bottom: 25,
                        left: 20
                    }}>
                        <CustomText text="Desempenho > 10%   0 alunos" color="#FFFFFF" />
                        <CustomButton onPress={handlePDF} title="Gerar PDF" width={300} padding={16} size={16} color="#FFFFFF" marginTop={20} />
                    </View>
                </View>
            </View>
        </ScrollView>
    </View>
)
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "#000000",
        justifyContent: "space-around",
        padding: 25
    },

    card: {
        backgroundColor: "#232326",
        width: 340,
        height: 100,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center"
    },

    cardContainer: {
        gap: 15,
        marginTop: 12,
    },

    averageContainer: {
        width: 340,
        height: 290,
        backgroundColor: "#232326",
        marginTop: 12,
        borderRadius: 12

    },

    progressContainer: {
        position: "relative",
        width: 200
    },

    averageBar: {
        marginLeft: 10,
    },

    roundedLine: {
        height: "90%",
        width: 0.5,
        backgroundColor: "#77767E",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },

    leftSide: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    rightSide: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    progressText: {
        position: "absolute"
    },

    button: {
        width: 300,
        alignSelf: "center",
        borderRadius: 8
    },
})