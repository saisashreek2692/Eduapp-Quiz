/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], (array[j] = array[j]), array[i]];
  }
};

const Quiz = ({navigation}) => {
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const [optns, setOptns] = useState([]);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getQuiz = async () => {
    setIsLoading(true);
    const url =
      'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.results[0]);
    setQuestions(data.results);
    setOptns(generateOptionsAndShuffle(data.results[0]));
    setIsLoading(false);
  };

  useEffect(() => {
    getQuiz();
  }, []);

  const handleNextBtn = () => {
    setQues(ques + 1);
    setOptns(generateOptionsAndShuffle(questions[ques + 1]));
  };

  const generateOptionsAndShuffle = _question => {
    const options = [..._question.incorrect_answers];
    options.push(_question.correct_answer);
    shuffleArray(options);
    return options;
  };

  const handleSelectedOption = _option => {
    if (_option === questions[ques].correct_answer) {
      setScore(score + 10);
    }
    if (ques !== 9) {
      setQues(ques + 1);
      setOptns(generateOptionsAndShuffle(questions[ques + 1]));
    }
    if (ques === 9) {
      handleShowResult();
    }
  };

  const handleShowResult = () => {
    navigation.navigate('Result', {
      score: score,
    });
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {isLoading ? (
          <View>
            <Text style={styles.loadingText}>LOADING.....</Text>
          </View>
        ) : (
          questions && (
            <View style={styles.parent}>
              <View style={styles.textQue}>
                <Text style={styles.question}>
                  Q. {decodeURIComponent(questions[ques].question)}
                </Text>
              </View>
              <View style={styles.textOptions}>
                <TouchableOpacity
                  style={styles.optionBtn}
                  onPress={() => handleSelectedOption(optns[0])}>
                  <Text style={styles.option}>
                    {decodeURIComponent(optns[0])}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.optionBtn}
                  onPress={() => handleSelectedOption(optns[1])}>
                  <Text style={styles.option}>
                    {decodeURIComponent(optns[1])}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.optionBtn}
                  onPress={() => handleSelectedOption(optns[2])}>
                  <Text style={styles.option}>
                    {decodeURIComponent(optns[2])}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.optionBtn}
                  onPress={() => handleSelectedOption(optns[3])}>
                  <Text style={styles.option}>
                    {decodeURIComponent(optns[3])}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnBottom}>
                {/* <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>SKIP</Text>
              </TouchableOpacity> */}
                {ques !== 9 && (
                  <TouchableOpacity
                    style={styles.button}
                    onPress={handleNextBtn}>
                    <Text style={styles.buttonText}>NEXT</Text>
                  </TouchableOpacity>
                )}
                {ques === 9 && (
                  <TouchableOpacity
                    style={styles.buttonResult}
                    onPress={handleShowResult}>
                    <Text style={styles.buttonResults}>SHOW RESULTS</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          )
        )}
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
  buttonResult: {
    backgroundColor: '#344E41',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 35,
  },
  buttonResults: {
    fontFamily: 'DMSans-Bold',
    color: '#DAD7CD',
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  loadingText: {
    alignSelf: 'center',
    padding: 40,
    maring: 40,
    fontSize: 32,
    fontWeight: '600',
  },
});
