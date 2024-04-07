import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

const Question = ({ navigation, route }) => {
  const { questionsData } = route.params;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const currentQuestion = questionsData[currentQuestionIndex];

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswers([]); // Reset selected answers for next question
    } else {
      navigation.navigate('Summary', { questionsData, selectedAnswers });
    }
  };

  const handleAnswer = (index) => {
    if (currentQuestion.type === 'multiple-choice') {
      setSelectedAnswers([index]);
    } else if (currentQuestion.type === 'multiple-answer') {
      const updatedAnswers = selectedAnswers.includes(index)
        ? selectedAnswers.filter((i) => i !== index)
        : [...selectedAnswers, index];
      setSelectedAnswers(updatedAnswers);
    } else if (currentQuestion.type === 'true-false') {
      setSelectedAnswers([index]);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{currentQuestion.prompt}</Text>
      {currentQuestion.choices.map((choice, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleAnswer(index)}
          style={{
            padding: 10,
            marginVertical: 10,
            borderRadius: 5,
            backgroundColor: selectedAnswers.includes(index) ? 'lightblue' : 'white',
          }}>
          <Text>{choice}</Text>
        </TouchableOpacity>
      ))}
      <Button title="Next" onPress={handleNextQuestion} />
    </View>
  );
};


export default Question;
