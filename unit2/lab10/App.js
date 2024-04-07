import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Question from './components/Question';
import Summary from './components/summary';

const Stack = createStackNavigator();

const questionsData = [
  {
    prompt: "George Gervin’s 'most points scored in a quarter’ record was broken in 2015, by this player—who still holds the record today.",
    type: "multiple-choice",
    choices: ["Lebron James", "Kobe Bryant", "Klay Thompson", "Damian Lillard"],
    correct: 2,
  },
  {
    prompt: "Which NBA team has made the most championships?",
    type: "multiple-answer",
    choices: [
      "Boston Celtics",
      "Los Angeles Lakers",
      "Golden State Warriors",
      "New York Knicks",
    ],
    correct: [0, 1],
  },
  {
    prompt: "The Bulls is only active NBA franchise with multiple Final appearances, with no losses?",
    type: "true-false",
    choices: ["True", "False"],
    correct: 0,
  },
];

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Question" component={Question} initialParams={{ questionsData }} />
        <Stack.Screen name="Summary" component={Summary} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
