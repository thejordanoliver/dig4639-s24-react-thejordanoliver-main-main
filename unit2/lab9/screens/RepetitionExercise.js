import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

const RepetitionExercise = ({ navigation, route }) => {
  const { activityName } = route.params;
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>{activityName}</Text>
      <Text style={{ fontSize: 18 }}>Count: {count}</Text>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Button
          title="Increase Count"
          onPress={increaseCount}
          containerStyle={{ marginHorizontal: 10 }}
        />
        <Button
          title="Reset"
          onPress={resetCount}
          containerStyle={{ marginHorizontal: 10 }}
        />
        <Button
          title="Home"
          onPress={() => navigation.navigate('Home')}
          containerStyle={{ marginHorizontal: 10 }}
        />
      </View>
    </View>
  );
};

export default RepetitionExercise;
