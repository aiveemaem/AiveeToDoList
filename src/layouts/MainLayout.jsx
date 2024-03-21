import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native';

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
      <Text style={styles.footer}>Copyright &copy; 2024 Aivee Madrelejos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  footer: {
    textAlign: 'center',
    marginTop: 20,
    color: '#888',
  }
});

export default MainLayout;