import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../routes/AppNavigator";

export interface Props {
    name: string,
    email: string,
    number: string,
    birthdata: string,
    onPress?: () => void;
}

export default function CardInfos({ name, email, number, birthdata, onPress }: Props) {
    const navigation = useNavigation<StackTypes>()

    const [show, setShow] = useState<boolean>(false)

    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={() => { setShow(!show) }}>
                <View style={styles.containerText}>
                    <Text style={styles.textBold}>
                        {name}
                    </Text>
                    {
                        show ?
                            <MaterialIcons name="keyboard-arrow-down" size={24} color="#fff" />
                            :
                            <MaterialIcons name="keyboard-arrow-left" size={24} color="#fff" />
                    }
                </View>
            </TouchableOpacity>
            <View style={[styles.containerInfos, { height: show ? "auto" : 0, marginTop: show ? 12 : 0 }]}>
                <View style={styles.Infos}>
                    <Text style={styles.textBold}>Email: </Text>
                    <Text style={styles.textSimple}>{email}</Text>
                </View>
                <View style={styles.Infos}>
                    <Text style={styles.textBold}>Telefone: </Text>
                    <Text style={styles.textSimple}>{number}</Text>
                </View>
                <View style={styles.Infos}>
                    <Text style={styles.textBold}>Data de Nascimento: </Text>
                    <Text style={styles.textSimple}>{birthdata}</Text>
                </View>
                <TouchableOpacity style={styles.ButtonReport} onPress={() => navigation.navigate("ReportsPerformance")}>
                    <Text style={styles.TexButton}>
                        Ver desempenho individual
                    </Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    card: {
        width: "100%",
        display: "flex",
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: "#7B4296",
        minHeight: 48,
        borderRadius: 8,
        justifyContent: "center",
        marginBottom: 12

    },
    containerText: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#fff",
    },
    textBold: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    textSimple: {
        color: "#fff",
        fontSize: 16,
    },
    containerInfos: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        flexWrap: "nowrap",
    },
    Infos: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: 8
    },
    ButtonReport: {
        borderColor: "#fff",
        borderWidth: 2,
        padding: 4,
        alignSelf: "flex-end",
        marginTop: 12
    },
    TexButton:
    {
        color: "#fff"
    }
})