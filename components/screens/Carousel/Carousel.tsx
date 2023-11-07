import { View, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel"

const CustomCarousel: React.FC = () => {
    const SLIDER_WIDTH: number = Dimensions.get('window').width + 80
    const ITEM_WIDTH: number = Math.round(SLIDER_WIDTH * 0.7)

    return (
       <View>

       </View>
    )
}


















// import React from "react";
// import { View, StyleSheet, Text, Image } from "react-native";
// import Carousel, { Pagination } from "react-native-snap-carousel";
// import  { SLIDER_WIDTH, ITEM_WIDTH }  from "../CarouselCard/CarouselCard";
// import { data, dataInterface } from "../../../assets/data";


// export const MyCarousel: React.FC = () => {
//     const [index, setIndex] = React.useState(0)
//     const _carousel = React.useRef(null)

//     const CarouselCard: React.FC<{ item: dataInterface }> = ({ item }) => {
        
//         return (
//           <View style={styles.container}>
//               <Image source={{uri: item.imgUrl}}
//                      style={styles.image}
//               />
//               <Text style={styles.header}>{item.title}</Text>
//               <Text style={styles.body}>{item.body}</Text>
//           </View>
//       )
//     }
//     const styles = StyleSheet.create({
//       container: {
//         backgroundColor: 'white',
//         borderRadius: 8,
//         width: ITEM_WIDTH,
//         paddingBottom: 40,
//         shadowColor: "#000",
//         shadowOffset: {
//           width: 0,
//           height: 3,
//         },
//         shadowOpacity: 0.29,
//         shadowRadius: 4.65,
//         elevation: 7,
//       },
//       image: {
//         width: ITEM_WIDTH,
//         height: 300,
//       },
//       header: {
//         color: "#222",
//         fontSize: 28,
//         fontWeight: "bold",
//         paddingLeft: 20,
//         paddingTop: 20
//       },
//       body: {
//         color: "#222",
//         fontSize: 18,
//         paddingLeft: 20,
//         paddingRight: 20
//       }
//     })

//     return (
//         <View>
//             <Carousel
//                 layout="tinder"
//                 layoutCardOffset={9}
//                 ref={_carousel}
//                 data={data}
//                 renderItem={({ item }: { item: dataInterface}) => (
//                     <CarouselCard item={item} />
//                 )}
//                 sliderWidth={SLIDER_WIDTH}
//                 itemWidth={ITEM_WIDTH}
//             />
//             <Pagination
//                 dotsLength={data.length}
//                 activeDotIndex={index}
//                 carouselRef={_carousel}
//                 dotStyle={{
//                     width: 10,
//                     height: 10,
//                     borderRadius: 5,
//                     marginHorizontal: 0,
//                     backgroundColor: 'rgba(0, 0, 0, 0.92)'
//                 }} 
//                 inactiveDotOpacity={0.4}
//                 inactiveDotScale={0.6}
//                 tappableDots={true}
//                 />
//         </View>
//     )
// }