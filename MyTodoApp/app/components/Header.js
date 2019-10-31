import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './app/components/Header';

export default function Header() {
  return (
    <View style={styles.headercontainer}>
      <Text style={styles.headertext}>My To Do App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    headercontainer: {
        marginTop: 50,
        marginBottom: 50,
    },
    headertext:{
        fontSize: 25,
        fontWeight: 'bold',
        color: 'w3f4e66',
    }
  });