import axios from 'axios';
import * as Location from 'expo-location';
import { ImageSourcePropType } from 'react-native';

export type DynamicImageSliderType = {
    title: string;
    image: ImageSourcePropType;
    weather: string;
};

const FOURSQUARE_API_KEY = 'fsq39HZDcT4DVGuGBxAvqS5zCYdsKydd+UY7hT82+Zb0mkg=';
const OPENWEATHER_API_KEY = '97d069f09d07841c3f042e7cdc74d5f8';
const UNSPLASH_ACCESS_KEY = 'Oyfui-Mt98n0Ar9TTryNe14BN0KRLmVvqdGTb5VJaaE';

async function getNearbyBeaches(latitude: number, longitude: number): Promise<any[]> {
    try {
        const response = await axios.get('https://api.foursquare.com/v3/places/search', {
            params: {
                query: 'beach',
                ll: `${latitude},${longitude}`,
                limit: 4,
                sort: 'DISTANCE'
            },
            headers: {
                Authorization: FOURSQUARE_API_KEY
            }
        });
        return response.data.results;
    } catch (error) {
        console.error('Error fetching nearby beaches:', error);
        return [];
    }
}

async function getWeather(latitude: number, longitude: number): Promise<string> {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: {
                lat: latitude,
                lon: longitude,
                units: 'metric',
                appid: OPENWEATHER_API_KEY
            }
        });
        return `${Math.round(response.data.main.temp)}°C`;
    } catch (error) {
        console.error('Error fetching weather:', error);
        return 'N/A';
    }
}

async function getBeachImage(beachName: string): Promise<string> {
    try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: `${beachName} beach`,
                per_page: 1
            },
            headers: {
                Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
            }
        });
        return response.data.results[0].urls.regular;
    } catch (error) {
        console.error('Error fetching beach image:', error);
        return '';
    }
}

export async function getDynamicExploreData(): Promise<DynamicImageSliderType[]> {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return [];
    }

    let location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;

    const beaches = await getNearbyBeaches(latitude, longitude);
    const exploreData: DynamicImageSliderType[] = [];

    for (const beach of beaches) {
        const weather = await getWeather(beach.geocodes.main.latitude, beach.geocodes.main.longitude);
        const imageUrl = await getBeachImage(beach.name);

        exploreData.push({
            title: beach.name,
            image: { uri: imageUrl } as ImageSourcePropType,
            weather: weather
        });
    }

    return exploreData;
}