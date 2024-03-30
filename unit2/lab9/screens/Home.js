import React from 'react';
import { View, FlatList } from 'react-native';
import { Button } from 'react-native-elements';


const Home = ({ navigation }) => {
  const exercises = [
    { name: 'Repetition Exercise', screen: 'RepetitionExercise' },
    { name: 'Duration Exercise', screen: 'DurationExercise' },
  
  ];

  const navigateToExercise = (exercise) => {
    navigation.navigate(exercise.screen, { activityName: exercise.name });
  };

  return (
    <View>
      <FlatList
        data={exercises}
        renderItem={({ item }) => (
          <Button
            title={item.name}
            onPress={() => navigateToExercise(item)}
            containerStyle={{ margin: 10 }}
          />
        )}
        keyExtractor={(item) => item.screen}
      />
    </View>
  );
};


export default Home;
