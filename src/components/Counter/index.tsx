import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export function Counter({ text, color, value }: any) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color }]}>
        {text}
      </Text>
      <Text style={styles.counter}>
        {value}
      </Text>
    </View>
  );
}