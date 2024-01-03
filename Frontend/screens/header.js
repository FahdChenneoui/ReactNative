import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Gestion de commerce</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: '#8200d6',
  },
  title: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
  }
});