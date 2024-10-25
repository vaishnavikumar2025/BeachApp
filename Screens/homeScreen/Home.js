import React, { useRef, useState } from 'react';
import { View, StyleSheet, SafeAreaView, Animated } from 'react-native';
import TopBar from './TopBar/TopBar';
import Banner from './Banners/Banners';
import NavBar from './Navbar';

const HEADER_MIN_HEIGHT = 200;
const HEADER_MAX_HEIGHT = 280; // Increased to accommodate the expanded menu
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default function Home() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp',
  });

  const logoAndMenuOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View 
        style={[
          styles.header, 
          { 
            height: headerHeight,
            transform: [{ translateY: headerTranslateY }] 
          }
        ]}
      >
        <TopBar 
          logoAndMenuOpacity={logoAndMenuOpacity} 
          isMenuOpen={isMenuOpen}
          onMenuPress={toggleMenu}
        />
      </Animated.View>
      <Animated.ScrollView
        contentContainerStyle={styles.scrollContent}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      >
        <View style={{ height: HEADER_MAX_HEIGHT }} />
        <Banner />
        {/* Add other components here */}
        
      </Animated.ScrollView>
      <NavBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
    zIndex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
});