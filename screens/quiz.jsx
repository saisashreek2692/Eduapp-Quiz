/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';

const Quiz = ({navigation}) => {
  const [questions, setQuestions] = useState();
  const [que, setQue] = useState(0);

  const getQuiz = async () => {
    const url = 'https://opentdb.com/api.php?amount=10&type=multiple';
    const res = await fetch(url);
    console.log(res);
    const data = await res.json();
    console.log(data.results[0]);
    setQuestions(data.results);
  };

  useEffect(() => {
    getQuiz();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* {questions && (
          <View style={styles.parent}>
            <View style={styles.textQue}>
              <Text style={styles.question}>
                Q. Imagine this is really cool question
              </Text>
            </View>
            <View style={styles.textOptions}>
              <TouchableOpacity style={styles.optionBtn}>
                <Text style={styles.option}>Cool Option 1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionBtn}>
                <Text style={styles.option}>Cool Option 2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionBtn}>
                <Text style={styles.option}>Cool Option 3</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionBtn}>
                <Text style={styles.option}>Cool Option 4</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnBottom}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>SKIP</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>NEXT</Text>
              </TouchableOpacity>
            </View>
          </View>
        )} */}
        <View style={styles.textQue}>
          <Text style={styles.question}>
            Q. Imagine this is really cool question
          </Text>
        </View>
        <View style={styles.textOptions}>
          <TouchableOpacity style={styles.optionBtn}>
            <Text style={styles.option}>Cool Option 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionBtn}>
            <Text style={styles.option}>Cool Option 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionBtn}>
            <Text style={styles.option}>Cool Option 3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionBtn}>
            <Text style={styles.option}>Cool Option 4</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnBottom}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SKIP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  parent: {
    height: '100%',
  },
  textQue: {
    marginVertical: 16,
  },
  question: {
    fontSize: 28,
    fontWeight: '600',
    color: '#354f52',
  },
  textOptions: {
    marginVertical: 16,
    flex: 1,
  },
  optionBtn: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginVertical: 6,
    backgroundColor: '#52796F',
    borderRadius: 12,
  },
  option: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  btnBottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#52796F',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 35,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    textTransform: 'uppercase',
  },
});
