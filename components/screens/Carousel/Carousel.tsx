import  React, { useRef }   from "react";
import { View, StyleSheet } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel"
import { data, dataInterface } from "../../../assets/data";
import { CarouselCard, ITEM_WIDTH, SLIDER_WIDTH } from "../CarouselCard/CarouselCard";
import { CustomButton } from "../../CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native"
import { StackTypes } from "../../routes/AppNavigator"

export const CustomCarousel: React.FC = () => {
    const _carousel = useRef<any>(null);
    const [index, setIndex] = React.useState(0);
    const navigation = useNavigation<StackTypes>();

    return (
    <View style={styles.container}>
      <View style={styles.carouselContainer}>
       <Carousel
         layout="tinder"
         layoutCardOffset={9}
         ref={_carousel}
         data={data}
         renderItem={({item}: {item: dataInterface}) =>  (
            <CarouselCard item={item} />
         )}
         sliderWidth={SLIDER_WIDTH}
         itemWidth={ITEM_WIDTH}
         inactiveSlideShift={0}
         useScrollView={true}
         onSnapToItem={index => setIndex(index)}
          />

         <View style={styles.paginationContainer}>
          <Pagination
            dotsLength={data.length}
            activeDotIndex={index}
            carouselRef={_carousel.current}
            dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: "#F65151"
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            tappableDots={true}
            inactiveDotStyle={{
                backgroundColor: "#9A99A2"
            }}
            />
          </View>
    <CustomButton title="Avançar" width={340} bgColor="#F65151" padding={16} radius={8} marginLeft={25} size={17} fontWeight="bold" onPress={() => navigation.navigate("Welcome")}/>
    </View>
</View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor : "#161416",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    carouselContainer: {
      position: "absolute"
    },
    paginationContainer: {
      marginTop: 10, // Ajuste conforme necessário para o espaçamento desejado
    },
  });