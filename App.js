import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);


  const addGoalHandler = goalTitle => {
    if (goalTitle.length === 0) {
      return;
    }
    setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: goalTitle}]);
    setIsAddMode(false);
  }

  const removeGoalhandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goalId);
    });
  }

  const cancelGoalAddHandler = () => {
      setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="add new goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAddHandler} />
      <FlatList 
        data={courseGoals} 
        renderItem={itemData => <GoalItem id={itemData.item.key} onDelete={removeGoalhandler} title={itemData.item.value} />}>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    padding: 100,
  },


});

