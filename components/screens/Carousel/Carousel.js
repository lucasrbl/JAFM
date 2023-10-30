import React from "react";
import { View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import  CarouselCard, { SLIDER_WIDTH, ITEM_WIDTH }  from "../CarouselCard/CarouselCard";
import { data } from "../../../assets/data";


export const MyCarousel = () => {
    const [index, setIndex] = React.useState(0)
    const _carousel = React.useRef(null)
    const _renderItem = ({item, index}) => {
        return (
            <CarouselCard item={item} />
        )
    }

    return (
        <View>
            <Carousel
                layout="tinder"
                layoutCardOffset={9}
                ref={_carousel}
                data={data}
                renderItem={_renderItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
            />
            <Pagination
                dotsLength={data.length}
                activeDotIndex={index}
                carouselRef={_carousel}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.92)'
                }} 
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                tappableDots={true}
                />
        </View>
    )
}