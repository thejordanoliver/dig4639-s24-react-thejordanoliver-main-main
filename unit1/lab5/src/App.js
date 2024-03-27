import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import RepetitionExercise from './components/ReptitionExercise/index';
import DurationExercise from './components/DurationExercise/index';

const App = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleExerciseSelection = (exerciseType) => {
    setSelectedExercise(exerciseType);
  };

  return (
    <div>
      <h1>Exercise Menu</h1>
      <button onClick={() => handleExerciseSelection('Repetition')}>Repetition Exercise</button>
      <button onClick={() => handleExerciseSelection('Duration')}>Duration Exercise</button>

      <div>
        {selectedExercise === 'Repetition' && <RepetitionExercise name="Repetition Exercise" />}
        {selectedExercise === 'Duration' && <DurationExercise name="Duration Exercise" />}
      </div>
    </div>
  );
};

export default App;
