import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';

const { width, height } = Dimensions.get('window');
const CARD_WIDTH = width * 0.9;
const CARD_HEIGHT = height * 0.28;
const GOLD_COLOR = '#FFD700';

const reviewsData = [
  { id: '1', name: 'Radhika E', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusd tempor incint ut labore et re magna mksmdkfm amfoo ooaodfkoko adnj monsea mastu rupe consturels pes noisio nads thaodu anmdji owudl jkaisl l asdfkjk idlsklk idiels as', rating: 3, date: '13th Nov, 2024', location: 'Malpe Beach', bgColor: '#E6F3E6' },
  { id: '2', name: 'John D', description: 'Great experience! The beach was beautiful and clean.', rating: 4, date: '15th Nov, 2024', location: 'Paradise Cove', bgColor: '#E6E6F3' },
  { id: '3', name: 'Sarah M', description: 'Absolutely stunning views. Will definitely come back!', rating: 5, date: '17th Nov, 2024', location: 'Sunset Point', bgColor: '#F3E6E6' },
];

const ReviewSec = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % reviewsData.length);
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + reviewsData.length) % reviewsData.length);
  };

  const truncateText = (text) => {
    const words = text.split(' ');
    if (words.length > 30) {
      return words.slice(0, 30).join(' ') + '... Read more';
    }
    return text;
  };

  return (
    <View style={styles.carouselContainer}>
      <Text style={styles.sectionTitle}>Reviews</Text>
      <View style={styles.centeredCardContainer}>
        <View style={[styles.card, { backgroundColor: reviewsData[activeIndex].bgColor }]}>
          <View style={styles.topRow}>
            <View style={styles.userInfo}>
              <Image source={require('@/assets/images/user-profile.png')} style={styles.avatar} />
              <Text style={styles.userName}>{reviewsData[activeIndex].name}</Text>
            </View>
            <View style={styles.dateLocationContainer}>
              <Text style={styles.date}>{reviewsData[activeIndex].date}</Text>
              <Text style={styles.location}>{reviewsData[activeIndex].location}</Text>
            </View>
          </View>
          <View style={styles.ratingContainer}>
            {[...Array(5)].map((_, i) => (
              <Text key={i} style={i < reviewsData[activeIndex].rating ? styles.starFilled : styles.starEmpty}>
                ★
              </Text>
            ))}
          </View>
          <Text style={styles.cardDescription}>{truncateText(reviewsData[activeIndex].description)}</Text>
          <TouchableOpacity onPress={prevSlide} style={[styles.navButton, styles.navButtonLeft]}>
            <Image source={require('@/assets/images/left-arrow-icon.png')} style={styles.navIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={nextSlide} style={[styles.navButton, styles.navButtonRight]}>
            <Image source={require('@/assets/images/right-arrow-icon.png')} style={styles.navIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    marginBottom: 100,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'left',
    paddingLeft: 20,
  },
  centeredCardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 15,
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center', // Centering content horizontally
    position: 'relative',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%', // Take up full width
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  dateLocationContainer: {
    alignItems: 'flex-end',
  },
  date: {
    fontSize: 14,
    color: '#000',
  },
  location: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    marginTop:-20,
  },
  starFilled: {
    color: GOLD_COLOR,
    fontSize: 22,
    right:40,
  },
  starEmpty: {
    color: '#ccc',
    fontSize: 22,
    right:40,
  },
  cardDescription: {
    fontSize: 14,
    color: '#4169E1',
    textAlign: 'center',
    marginVertical: 5, // Add margin to create space between elements
  },
  navButton: {
    position: 'absolute',
    top: '50%',
    width: 20,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navButtonLeft: {
    left: 10, // Ensure it doesn't overlap text
  },
  navButtonRight: {
    right: 10, // Ensure it doesn't overlap text
  },
  navIcon: {
    width: 45,
    height: 45
  },
});

export default ReviewSec;
