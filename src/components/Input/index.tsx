import React, { useState } from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { themes } from '@/themes';

export function Input({ addNewTask }: any) {
  const [borderColor, setBorderColor] = useState(themes.colors.gray[700])
  const [text, setText] = useState('')

  function handleFocus() {
    setBorderColor(themes.colors.purple[700])
  }

  function handleBlur() {
    setBorderColor(themes.colors.gray[700])
  }

  function handleNewTask() {
    if (text !== '') {
      addNewTask(text)
      setText('')
    }
  }
  
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, { borderColor }]}
        placeholder='Adicione uma nova tarefa'
        placeholderTextColor={themes.colors.gray[300]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleNewTask}
      >
        <Image source={require('@/../assets/images/plus.png')}/>
      </TouchableOpacity>
    </View>
  );
}