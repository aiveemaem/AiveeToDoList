import React from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';
import { useState } from 'react';

function ToDoForm({addTask, tasks }) {
  const [taskText, setTaskText] = useState('');

  const handleChangeText = (text) => {
    setTaskText(text);
  }

  const handlePress = () => {
    if (tasks.includes(taskText)) {
      alert(`"${taskText}" task already exists`);
      setTaskText('');
      return;
    }

    addTask(taskText);
    setTaskText('');
  }

  return (
    <View style={styles.form}>
      <TextInput 
        style={styles.input} 
        placeholder="Add a new task..." 
        onChangeText={handleChangeText} 
        value={taskText}
      />
      <Button title="Add" onPress={handlePress}/>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default ToDoForm;
