import { themes } from '@/themes';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontFamily: themes.fontFamily.inter.bold,
    fontSize: 14,
    marginRight: 8
  },
  counter: {
    fontFamily: themes.fontFamily.inter.bold,
    color: themes.colors.gray[200],
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: themes.colors.gray[400],
    borderRadius: 25
  }
});