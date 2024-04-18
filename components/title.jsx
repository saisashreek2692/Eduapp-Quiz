/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edu App - Quiz Game</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
  },
});
