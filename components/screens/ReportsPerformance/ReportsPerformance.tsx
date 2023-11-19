import React from "react"
import { View, StyleSheet } from "react-native"
import { CustomText } from "../../CustomText/CustomText"
import * as Progress from "react-native-progress"
export const ReportsPerformance: React.FC = () => {
    return (
        <View style={styles.wrapper}>
            <View>
                <CustomText text="Desempenho individual" color="#FFFFFF" />
            </View>

            <CustomText text="Lucas Silva" color="#FFFFFF" size={25} fontWeight="bold" />
            <View style={styles.cardContainer}> 
                <View style={styles.card}>
                    <View style={styles.leftSide}>
                        <CustomText text="80%" color="#04BE00" size={32} fontWeight="bold" />
                        <CustomText text="Tarefas concluídas" color="#77767E" />
                    </View>
                    <View style={styles.roundedLine} />
                    <View style={styles.rightSide}>
                        <CustomText text="92%" color="#04BE00" size={32} fontWeight="bold" />
                        <CustomText text="Presença" color="#77767E" />
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.leftSide}>
                        <CustomText text="32%" color="#F65151" size={32} fontWeight="bold" />
                        <CustomText text="Currículo concluído" color="#77767E" />
                    </View>

                    <View style={styles.roundedLine} />

                    <View style={styles.rightSide}>
                        <CustomText text="48%" color="#04BE00" size={32} fontWeight="bold" />
                        <CustomText text="Informações de cadastro na plataforma" color="#77767E" width={150} />
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.leftSide}>
                        <CustomText text="83%" color="#04BE00" size={32} fontWeight="bold" />
                    </View>

                    <View style={styles.roundedLine} />

                    <View style={styles.rightSide}>
                        <CustomText text="Desempenho total" color="#77767E" size={20} width={120} />
                    </View>
                </View>
            </View>

            <CustomText text="Média do estudante" color="#FFFFFF" />

            <View style={styles.averageContainer}>
                <View>
                    <Progress.Bar progress={0.04} width={320} height={25} borderRadius={8} style={{
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
                    <Progress.Bar progress={0.6} width={320} height={25} borderRadius={8} style={styles.averageBar} 
                    />
                    <View style={{ 
                        bottom: 25,
                        left: 20
                    }}>
                        <CustomText text="Desempenho > 80%   28 alunos" color="#FFFFFF"  />
                    </View>
                </View>
                <View>
                    <Progress.Bar progress={0.5} width={320} height={25} borderRadius={8} style={styles.averageBar} />
                    <View style={{
                        bottom: 25,
                        left: 20
                    }}>
                        <CustomText text="Desempenho > 60%   2 alunos" color="#FFFFFF"  />
                    </View>
                </View>
                <View>
                    <Progress.Bar progress={0.4} width={320} height={25} borderRadius={8} style={styles.averageBar} />
                    <View style={{
                        bottom: 25,
                        left: 20
                    }}>
                        <CustomText text="Desempenho > 40%   6 alunos" color="#FFFFFF"  />
                    </View>
                </View>
                <View>
                    <Progress.Bar progress={0} width={320} height={25} borderRadius={8} style={styles.averageBar} />
                    <View style={{
                        bottom: 25,
                        left: 20
                    }}>
                        <CustomText text="Desempenho > 20%   0 alunos" color="#FFFFFF"  />
                    </View>
                </View>
                <View>
                    <Progress.Bar progress={0} width={320} height={25} borderRadius={8} style={styles.averageBar} />
                    <View style={{
                        bottom: 25,
                        left: 20
                    }}>
                        <CustomText text="Desempenho > 10%   0 alunos" color="#FFFFFF"  />
                    </View>
                </View>

            </View>
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
        gap: 15
    },

    averageContainer: {
        width: 340,
        height: 290,
        backgroundColor: "#232326"
        
    },

    progressContainer: {
        position: "relative",
        width: 200
    },

    averageBar: {
        marginLeft: 10
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
      }
})