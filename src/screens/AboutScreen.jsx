import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = ({}) => {
    const [showEasterEgg, setShowEasterEgg] = useState(false);

    const toggleEasterEgg = () => {
        setShowEasterEgg(!showEasterEgg);
    }

  return (
    <MainLayout>
      <Text style={styles.header}>To Do List App</Text>
      <TouchableOpacity onPress={toggleEasterEgg}>
        <Text style={styles.text}>Author: Aivee Madrelejos</Text>
      </TouchableOpacity>
      {showEasterEgg && (
        <Text style={[styles.text, styles.easterEgg]}>🐰 Happy Easter! 🥚</Text>
      )}
      <Text style={styles.text}>Version 1.0</Text>
      <Text style={styles.text}>Date created: March 21, 2024</Text>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
  easterEgg: {
    fontSize: 24,
    marginTop: 10,
    color: 'purple',
    fontStyle: 'italic',
  },
});

export default AboutScreen;
