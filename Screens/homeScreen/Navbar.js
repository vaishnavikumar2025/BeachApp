import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Pressable, Text, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const EARLY_MORNING_START = 5;
const MORNING_START = 7;
const NOON_START = 11;
const AFTERNOON_START = 13;
const EVENING_START = 17;
const SUNSET_START = 19;
const NIGHT_START = 21;

export default function NavBar() {
  const navigation = useNavigation();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { name: "Home", icon: require("@/assets/images/homeIcon.png"), route: "Home" },
    { name: "Maps", icon: require("@/assets/images/surakshaMapsIcon.png"), route: "Maps", special: true },
    { name: "Gears", icon: require("@/assets/images/safetyGearsIcon.png"), route: "Gears" },
  ];

  const getBackgroundColors = () => {
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();
    const time = hour + minute / 60;

    if (time >= EARLY_MORNING_START && time < MORNING_START) {
      // Early morning: blue to orangish-yellow
      return ['#87CEEB', '#FFA500'];
    } else if (time >= MORNING_START && time < NOON_START) {
      // Morning: blue and white gradient
      return ['#87CEEB', '#FFFFFF'];
    } else if (time >= NOON_START && time < AFTERNOON_START) {
      // Noon: intense blue and white gradient
      return ['#FFFFFF', '#1E90FF'];
    } else if (time >= AFTERNOON_START && time < EVENING_START) {
      // Afternoon: softer blue and white gradient
      return ['#F0F8FF', '#87CEEB'];
    } else if (time >= EVENING_START && time < SUNSET_START) {
      // Evening: orangish-yellow gradient
      return ['#FFD700', '#FFA500'];
    } else if (time >= SUNSET_START && time < NIGHT_START) {
      // Sunset: darker orange to purple transition
      return ['#FF4500', '#8A2BE2'];
    } else {
      // Night: dark blue with a hint of white
      return ['#191970', '#483D8B', '#FFFFFF'];
    }
  };

  return (
    <LinearGradient colors={getBackgroundColors()} style={styles.navBarContainer}>
      <View style={styles.navBar}>
        {navItems.map((item, index) => (
          <Pressable
            key={index}
            style={[
              styles.navButton,
              item.special && styles.specialNavButton,
            ]}
            onPress={() => navigation.navigate(item.route)}
          >
            <View style={[
              styles.iconContainer,
              item.special && styles.specialIconContainer
            ]}>
              <Image
                source={item.icon}
                style={[
                  styles.navIcon,
                  item.special && styles.specialNavIcon
                ]}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.navText}>{item.name}</Text>
          </Pressable>
        ))}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  navBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingBottom: 8, // Add some padding at the bottom for devices with rounded corners
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: '100%',
    paddingHorizontal: 5,
    paddingTop: 5,
  },
  navButton: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  specialNavButton: {
    flex: 1.2,
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  specialIconContainer: {
    width: 50,
    height: 50,
  },
  navIcon: {
    width: '100%',
    height: '100%',
  },
  specialNavIcon: {
    width: '100%',
    height: '100%',
  },
  navText: {
    fontSize: 12,
    color: "#007AFF",
    textAlign: "center",
    marginTop: 4,
  },
});