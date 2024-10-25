import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const BeachArtifactCard = ({ navigation }) => {
  const images = [
    require('@/assets/images/beach1.jpg'),
    require('@/assets/images/beach1.jpg'),
    require('@/assets/images/beach1.jpg'),
    // Add more images as needed
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
        <View style={styles.locationContainer}>
          <Ionicons name="location-sharp" size={18} color="#FF4C4C" marginLeft={10} />
          <Text style={styles.locationText}>Malpe beach, Udupi, Karnataka</Text>
        </View>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Artifacts")}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Artifacts Button */}
      <View style={styles.snapButtonContainer}>
        <TouchableOpacity style={styles.buttonPrimary1}>
            <Text style={styles.buttonText1}>Artifacts</Text>
        </TouchableOpacity>
      </View>

      {/* Image Carousel */}
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carouselContainer}
      >
        {images.map((image, index) => (
          <Image key={index} source={image} style={styles.mainImage} />
        ))}
      </ScrollView>

      {/* Details Section */}
      <View style={[styles.detailsContainer, { height: screenHeight * 0.4 }]}>
        <View style={styles.titleBar} />
        <Text style={styles.title}>Shell Mirrors</Text>
        <Text style={styles.subtitle}>JPM Seashells, Malpe beach, Udupi, Karnataka</Text>
        <Text style={styles.description}>
          Delicate mirrors adorned with shells making it a wonderful beach-related decor to your home.
        </Text>
        <View style={styles.ratingContainer}>
          <FontAwesome name="star" size={20} color="#FFD700" />
          <FontAwesome name="star" size={20} color="#FFD700" />
          <FontAwesome name="star" size={20} color="#FFD700" />
          <FontAwesome name="star" size={20} color="#FFD700" />
          <FontAwesome name="star-half" size={20} color="#FFD700" />
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.buttonPrimary}>
            <Text style={styles.buttonText}>Get Directions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSecondary}>
            <Text style={styles.buttonText}>Give Review</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: '#BCE2D1',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 25,
    paddingRight: 15,
  },
  logo: {
    top: 10,
    width: 70,
    height: 50,
  },
  locationContainer: {
    top: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  locationText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 10,
  },
  snapButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
    marginBottom: 0,
    paddingLeft: 50,
  },
  buttonText1: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonPrimary1: {
    backgroundColor: '#1e2758',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 120,
  },
  carouselContainer: {
    alignItems: 'center',
    marginVertical: 10,
    position: 'absolute',
    top: 20,
    left: 10,
  },
  mainImage: {
    width: screenWidth - 40,
    height: (screenWidth - 40) * 0.8,
    marginHorizontal: 5,
    borderRadius: 15,
  },
  detailsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  titleBar: {
    width: 60,
    height: 5,
    backgroundColor: '#CCC',
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 15,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  buttonPrimary: {
    backgroundColor: '#4FBDBA',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  buttonSecondary: {
    backgroundColor: '#999',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  buttonBeach: {
    backgroundColor: '#1e2758',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 20,
    position: 'absolute',
    top: 0,
    left: 50,
  },
  buttonText1: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default BeachArtifactCard;
