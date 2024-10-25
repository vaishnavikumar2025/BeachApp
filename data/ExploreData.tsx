import { ImageSourcePropType } from 'react-native';
import { getLocation, fetchNearbyBeaches, formatBeachData } from '../components/beach-service';

export type ImageSliderType = {
    title: string,
    image: ImageSourcePropType,
    weather: string,
};

export const getExploreData = async (): Promise<ImageSliderType[]> => {
    try {
        const { latitude, longitude } = await getLocation();
        const nearbyBeaches = await fetchNearbyBeaches(latitude, longitude);
        return await formatBeachData(nearbyBeaches);
    } catch (error) {
        console.error('Error fetching explore data:', error);
        return [];
    }
};

export const fallbackExploreData: ImageSliderType[] = [
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