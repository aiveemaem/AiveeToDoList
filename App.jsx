/**
 * My To Do List App
 *
 * @format
 */
import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

import {
  SafeAreaView,
  Text,
} from 'react-native';

function App() {

  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);
  
  const handleAddTask = (taskText) => {
    setTasks([...tasks, taskText]);
  }

  return (
    <SafeAreaView>
      <Text style={styles.title}>My To Do List</Text>
      <ToDoList tasks={tasks} />
      <ToDoForm tasks={tasks} addTask={handleAddTask}/>
    </SafeAreaView>
  );
}

const styles = {
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
};

export default App;
