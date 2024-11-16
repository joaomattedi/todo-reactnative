import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './styles';

export function EmptyListComponent() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('@/../assets/images/Clipboard.png')}
        style={styles.image}
      />
      <Text style={styles.textBold}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.text}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}