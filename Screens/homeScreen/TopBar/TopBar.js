import React from 'react';
import { View, Image, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import SearchBar from '@/components/SearchBar';
import Boxes from '../Boxes/Boxes';
import { DynamicBackground } from './DynBack';

export default function TopBar({ logoAndMenuOpacity, isMenuOpen, onMenuPress }) {
  const menuHeight = isMenuOpen ? 100 : 0;

  return (
    <View style={styles.container}>
      <DynamicBackground>
        <Animated.View style={[styles.topSection, { opacity: logoAndMenuOpacity }]}>
          <Image
            source={require("@/assets/images/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <TouchableOpacity onPress={onMenuPress}>
            <Image
              source={require("@/assets/images/menu.png")}
              style={styles.menuIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={[styles.menuContainer, { height: menuHeight, opacity: isMenuOpen ? 1 : 0 }]}>
          <Boxes />
        </Animated.View>
        <View style={styles.searchBarWrapper}>
          <SearchBar />
        </View>
      </DynamicBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ADD8E0",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    height: 100,
  },
  logo: {
    width: 90,
    height: 95,
  },
  menuIcon: {
    width: 50,
    height: 60,
  },
  menuContainer: {
    overflow: 'hidden',
    justifyContent: 'center',
  },
  searchBarWrapper: {
    paddingHorizontal: 25,
    paddingBottom: 15,
    paddingTop: 5,
  },
});