import React from 'react';
import { ScrollView, Image, StyleSheet, View, Text } from 'react-native';

const img1 = require('./assets/img1.png');
const img2 = require('./assets/img2.png');
const img3 = require('./assets/img3.png');
const img4 = require('./assets/img4.png');
const img5 = require('./assets/img5.png');
const img6 = require('./assets/img6.png');

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Galeria de Imagens</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={img1} style={styles.image} />
        <Image source={img2} style={styles.image} />
        <Image source={img3} style={styles.image} />
        <Image source={img4} style={styles.image} />
        <Image source={img5} style={styles.image} />
        <Image source={img6} style={styles.image} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollContainer: {
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 180,
    borderRadius: 10,
    marginBottom: 20,
  },
});