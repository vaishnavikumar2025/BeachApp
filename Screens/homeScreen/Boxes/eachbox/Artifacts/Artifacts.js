// // artifacts.js
import React from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BeachArtifactsScreen = ({ navigation }) => { 
  const beachArtifacts = [
    { id: '1', name: 'Conch', location: 'Pondicherry', image: require('D:/Homepage/trial/trial/Client/assets/images/beach1.jpg') },
    { id: '2', name: 'Shell Mirrors', location: 'Udupi', image: require('D:/Homepage/trial/trial/Client/assets/images/beach1.jpg') },
    { id: '3', name: 'Shell Necklace', location: 'Mumbai', image: require('D:/Homepage/trial/trial/Client/assets/images/beach2.jpg') },
    { id: '4', name: 'Pearl Necklace', location: 'Kanyakumari', image: require('D:/Homepage/trial/trial/Client/assets/images/beach3.jpg') },
    { id: '5', name: 'Loose Shells', location: 'Malpe beach', image: require('D:/Homepage/trial/trial/Client/assets/images/beach1.jpg') },
    { id: '6', name: 'Rudraksha', location: 'Rameswaram', image: require('D:/Homepage/trial/trial/Client/assets/images/beach2.jpg') },
    // Add more items as needed
  ];
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('D:/Homepage/trial/trial/Client/assets/images/logo.png')} style={styles.logo} />
        <View style={styles.locationContainer}>
          <Ionicons name="location-sharp" size={18} color="#FF4C4C" />
          <Text style={styles.locationText}>Malpe beach, Udupi, Karnataka</Text>
        </View>
      </View>
      <View style={styles.snapButtonContainer}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonPrimary}>
            <Text style={styles.buttonText}>Artifacts</Text>
        </TouchableOpacity>
      </View>
      <TextInput style={styles.searchInput} placeholder="Search Beach Artifacts" />
  
      <FlatList
        data={beachArtifacts}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => navigation.navigate("ArtifactsDetail")}
          >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.artifactName}>{item.name}</Text>
            <View style={styles.locationContainer1}>
              <Ionicons name="location-outline" size={14} color="red" />
              <Text style={styles.locationText1}>{item.location}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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
    marginLeft: 25,
  },
  locationText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 5,
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 10,
  },
  snapButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 50,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonPrimary: {
    backgroundColor: '#1e2758',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    left: 50,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
  },
  card: {
    flex: 1,
    margin: 8,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  artifactName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  locationContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  locationText1: {
    fontSize: 14,
    color: '#777',
    marginLeft: 5,
  },
  locationText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 5,  // Space between the icon and the text
  },
});

export default BeachArtifactsScreen;