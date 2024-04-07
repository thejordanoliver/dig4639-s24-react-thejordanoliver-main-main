import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const Summary = () => {
  const route = useRoute();
  const { questionsData } = route.params;

  const calculateScore = () => {
    let score = 0;
    questionsData.forEach((question) => {
      if (!question.selected) {
        return;
      }

      if (
        question.type === "true-false" ||
        question.type === "multiple-choice"
      ) {
        if (question.selected === question.correct) {
          score++;
        }
      } else if (question.type === "multiple-answer") {
        let isCorrect = question.selected.every((selectedIndex) =>
          question.correct.includes(selectedIndex)
        );
        if (isCorrect && question.selected.length === question.correct.length) {
          score++;
        }
      }
    });
    return score;
  };

  const renderSummary = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.totalScore} testID="total">
          Total Score: {calculateScore()} / {questionsData.length}
        </Text>
        {questionsData.map((question, index) => (
          <View key={index} style={styles.questionContainer}>
            <Text style={styles.questionPrompt}>{question.prompt}</Text>
            <Text style={styles.correctAnswer}>
              Correct Answer: {question.choices[question.correct]}
            </Text>
          </View>
        ))}
      </View>
    );
  };

  return renderSummary();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  totalScore: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionPrompt: {
    fontSize: 18,
    marginBottom: 10,
  },
  selectedAnswers: {
    fontSize: 16,
    marginBottom: 5,
  },
  correctAnswer: {
    fontSize: 16,
    fontStyle: "italic",
    color: "green",
  },
});

export default Summary;
