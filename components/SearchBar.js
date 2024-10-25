import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';

export default function SearchBar() {
  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="search beaches"
          placeholderTextColor="#999"
        />
        <Image
          source={require('../assets/images/search.png')} // Update with your actual file path
          style={styles.searchIcon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    paddingHorizontal: 0,
    paddingBottom: -10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 35,
    paddingHorizontal: 15,
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  searchIcon: {
    marginLeft: 10,
    width: 24,   // Adjust width to fit your icon
    height: 24,  // Adjust height to fit your icon
  },
});
