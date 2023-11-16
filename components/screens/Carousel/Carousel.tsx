// import  React, { useRef }   from "react";
// import { View, StyleSheet } from "react-native";
// import Carousel, { Pagination } from "react-native-snap-carousel"
// import { data, dataInterface } from "../../../assets/data";
// import { CarouselCard, ITEM_WIDTH, SLIDER_WIDTH } from "../CarouselCard/CarouselCard";


// export const CustomCarousel: React.FC = () => {
//     const _carousel = useRef<any>(null);
//     const [index, setIndex] = React.useState(0);

//     return (
//     <View>
//        <Carousel
//          layout="tinder"
//          layoutCardOffset={9}
//          ref={_carousel}
//          data={data}
//          renderItem={({item}: {item: dataInterface}) =>  (
//             <CarouselCard item={item} />
//          )}
//          sliderWidth={SLIDER_WIDTH}
//          itemWidth={ITEM_WIDTH}
//          inactiveSlideShift={0}
//          useScrollView={true}
//           />

//           <Pagination
//             dotsLength={data.length}
//             activeDotIndex={index}
//             carouselRef={_carousel.current}
//             dotStyle={{
//                 width: 10,
//                 height: 10,
//                 borderRadius: 5,
//                 marginHorizontal: 0,
//                 backgroundColor: 'rgba(0, 0, 0, 0.92)'
//             }}
//             inactiveDotOpacity={0.4}
//             inactiveDotScale={0.6}
//             tappableDots={true}
//             />
// </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
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

// })