/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Title from '../components/title';

const Result = ({navigation, route}) => {
  const {score} = route.params;

  const scoreBanner =
    score > 40 ? (
      <Image
        source={require('../assets/images/Victory.jpg')}
        style={styles.banner}
        resizeMode="contain"
      />
    ) : (
      <Image
        source={require('../assets/images/Failure.jpg')}
        style={styles.banner}
        resizeMode="contain"
      />
    );
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title titleText={'Results'} />
        <Text style={styles.scoreText}>Quiz Score: {score}</Text>
        <View style={styles.bannerContainer}>{scoreBanner}</View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.button}>
          <Text style={styles.buttonText}>GO TO HOME</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    fontFamily: 'DMSans-Bold',
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
    fontFamily: 'DMSans-Bold',
    fontSize: 24,
    fontWeight: '600',
    color: '#ffffff',
    textTransform: 'uppercase',
  },
  scoreText: {
    fontFamily: 'DMSans-Bold',
    fontSize: 24,
    fontWeight: '600',
    color: '#344E41',
    textTransform: 'uppercase',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
