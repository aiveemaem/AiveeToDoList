import React, {useState} from 'react';

import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import {SafeAreaView, Text, Button} from 'react-native';
import MainLayout from '../layouts/MainLayout';

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const handleAddTask = taskText => {
    setTasks([...tasks, taskText]);
  };
  return (
    <MainLayout>
    <SafeAreaView>
      <Text style={styles.title}>My To Do List</Text>
      <ToDoList tasks={tasks} />
      <ToDoForm tasks={tasks} addTask={handleAddTask} />
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
        style={styles.button}
      />
    </SafeAreaView>
    </MainLayout>
  );
};

const styles = {
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  button: {
    margin: 20,
    padding: 20,
  }
};

export default HomeScreen;
