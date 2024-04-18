/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Result = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <View>
          <Text>Result</Text>
        </View>
        <View style={styles.bannerContainer}>
          <Image
            source={require('../assets/images/Exams-bro.png')}
            style={styles.banner}
            resizeMode="contain"
          />
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text>Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Result;

const styles = StyleSheet.create({
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    height: 300,
    width: 300,
  },
});
