import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';


export default function Profile() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252B3B',
  },
  title: {
    color: '#FECE00',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 30,
  }
});