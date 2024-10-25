// memories.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Memories() {
  return (
    <View style={styles.container}>
      <Text>Memories Screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });