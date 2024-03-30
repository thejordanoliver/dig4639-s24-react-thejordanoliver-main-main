import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

const DurationExercise = ({ navigation, route }) => {
  const { activityName } = route.params;
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const startTimer = () => {
    setIsActive(true);
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => clearInterval(interval);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimer(0);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>{activityName}</Text>
      <Text style={{ fontSize: 18 }}>Timer: {timer} seconds</Text>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Button
          title={isActive ? 'Pause' : 'Start'}
          onPress={() => (isActive ? resetTimer() : startTimer())}
          containerStyle={{ marginHorizontal: 10 }}
        />
        <Button
          title="Reset"
          onPress={resetTimer}
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

export default DurationExercise;
