import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

export function Task({ value, deleteTask, completeTask }: any) {
  const [checked, setChecked] = useState(false);

  function handleDeleteTask() {
    if (checked) {
      completeTask(false)
    }
    deleteTask(value)
  }

  function handleCompleteTask() {
    setChecked((prevstate) => {
      completeTask(!prevstate)
      return !prevstate
    })
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={() => handleCompleteTask()}
        style={styles.check}
      >
        {
          checked ?
          <Image source={require('@/../assets/images/check_complete.png')} /> :
          <Image source={require('@/../assets/images/check.png')} />
        }
      </TouchableOpacity>
      <Text style={checked ? styles.checked : styles.text}>
        {value}
      </Text>
      <TouchableOpacity 
        style={styles.trash}
        onPress={handleDeleteTask}
      >
        <Image 
          source={require('@/../assets/images/trash.png')}
        />
      </TouchableOpacity>
    </View>
  );
}