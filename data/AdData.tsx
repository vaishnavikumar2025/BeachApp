import { ImageSourcePropType } from 'react-native';

export type ImageSliderType = {
    title: string,
    image: ImageSourcePropType,
    weather: string,
};


export const AdSlider = [
    {
        title : 'Beach1' ,
        image : require('../assets/images/beach1.jpg') ,
        weather : '25 C',
    },
    {
        title : 'Beach2' ,
        image : require('../assets/images/beach2.jpg') ,
        weather : '25 C',
    },
    {
        title : 'Beach3' ,
        image : require('../assets/images/beach3.jpg') ,
        weather : '25 C',
    },
    {
        title : 'Beach4' ,
        image : require('../assets/images/beach4.jpeg') ,
        weather : '25 C',
    },
];