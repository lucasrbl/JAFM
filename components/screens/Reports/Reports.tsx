import React from "react"
import { CustomText } from "../../CustomText/CustomText"
import { View } from "react-native"
import { CustomButton } from "../../CustomButton/CustomButton"


export const Reports: React.FC = () => {
    return (
        <View>
            <View>
                <CustomText text="Relatórios" fontWeight="bold" />
            </View>

            <View>
                <CustomText />
                <CustomText text="Você ainda não gerou nenhum relatório de desempenho individual" />
            </View>

            <CustomButton width={340} height={50} title="Gerar Relatório" padding={16} radius={12} />
        </View>
    )
} 