import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  SafeAreaView,
} from 'react-native';

function ToDoList({tasks}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <Pressable>
          {tasks.map((task, index) => (
            <View style={[styles.task, styles.completed]}>
              <Text key={index} style={styles.taskText}>
                {task}
              </Text>
            </View>
          ))}
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
