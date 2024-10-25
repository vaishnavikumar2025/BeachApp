import axios from "axios";

const API_KEY = "fsq39HZDcT4DVGuGBxAvqS5zCYdsKydd+UY7hT82+Zb0mkg=";

const fetchBeachPhotos = async (fsq_id) => {
  try {
    const response = await axios.get(
      `https://api.foursquare.com/v3/places/${fsq_id}/photos`,
      {
        headers: {
          Authorization: API_KEY,
        },
      }
    );
    if (response.data.length > 0) {
      const photo = response.data[0];
      return `${photo.prefix}original${photo.suffix}`;
    } else {
      return null;
    }
  } catch (err) {
    console.error(`Error fetching photo for fsq_id ${fsq_id}:`, err.message);
    return null;
  }
};

export const fetchBeachData = async (latitude, longitude) => {
  try {
    const response = await axios.get(
      "https://api.foursquare.com/v3/places/nearby",
      {
        params: {
          ll: `${latitude},${longitude}`,
          query: "beach",
          limit: 10,
        },
        headers: {
          Authorization: API_KEY,
        },
      }
    );
    const beachResults = response.data.results.filter((place) =>
      place.categories.some(
        (category) => category.name.toLowerCase() === "beach"
      )
    );
    const beachDataWithPhotos = await Promise.all(
      beachResults.map(async (beach) => {
        const photoUrl = await fetchBeachPhotos(beach.fsq_id);
        return { ...beach, photoUrl };
      })
    );
    return beachDataWithPhotos;
  } catch (err) {
    throw new Error(`Error fetching beach data: ${err.message}`);
  }
};

export const fetchNearbyPlaces = async (latitude, longitude) => {
  try {
    const categories = ["restaurant", "hotel"];
    const placesPromises = categories.map((category) =>
      axios.get("https://api.foursquare.com/v3/places/nearby", {
        params: {
          ll: `${latitude},${longitude}`,
          query: category,
          limit: 10,
        },
        headers: {
          Authorization: API_KEY,
        },
      })
    );
    const responses = await Promise.all(placesPromises);
    const placesWithPhotos = [];

    for (const response of responses) {
      const places = await Promise.all(
        response.data.results.map(async (place) => {
          const photoUrl = await fetchBeachPhotos(place.fsq_id);
          if (photoUrl) {
            return { ...place, photoUrl };
          }
          return null;
        })
      );

      placesWithPhotos.push(...places.filter((place) => place !== null));
    }

    return placesWithPhotos;
  } catch (err) {
    throw new Error(`Error fetching nearby places: ${err.message}`);
  }
};
