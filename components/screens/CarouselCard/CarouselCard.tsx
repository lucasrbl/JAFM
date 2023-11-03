import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, ViewStyle, ImageStyle, TextStyle } from "react-native"
import { dataInterface } from "../../../assets/data";


interface Style {
  container: ViewStyle;
  image: ImageStyle;
  header: TextStyle;
  body: TextStyle;
}


export const SLIDER_WIDTH: number = Dimensions.get('window').width + 80
export const ITEM_WIDTH: number = Math.round(SLIDER_WIDTH * 0.7)


export const CarouselCard: React.FC<{ item: dataInterface }> = ({ item }) => {

      const styles = StyleSheet.create<Style>({
        container: {
          backgroundColor: 'white',
          borderRadius: 8,
          width: ITEM_WIDTH,
          paddingBottom: 40,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,
          elevation: 7,
        },
        image: {
          width: ITEM_WIDTH,
          height: 300,
        },
        header: {
          color: "#222",
          fontSize: 28,
          fontWeight: "bold",
          paddingLeft: 20,
          paddingTop: 20
        },
        body: {
          color: "#222",
          fontSize: 18,
          paddingLeft: 20,
          paddingRight: 20
        }
      })

    return (
        <View style={styles.container}>
            <Image source={{uri: item.imgUrl}}
                   style={styles.image}
            />
            <Text style={styles.header}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
        </View>
    )
}