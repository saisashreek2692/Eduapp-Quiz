/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import React from 'react';
import Title from '../components/title';

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title />
        <View style={styles.bannerContainer}>
          <Image
            source={require('../assets/images/Exams-bro.png')}
            style={styles.banner}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Quiz')} style={styles.button}>
          <Text style={styles.buttonText}>start</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  banner: {
    height: 300,
    width: 300,
  },
  button: {
    width: '100%',
    backgroundColor: '#52796F',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 35,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#ffffff',
    textTransform: 'uppercase',
  },
});
