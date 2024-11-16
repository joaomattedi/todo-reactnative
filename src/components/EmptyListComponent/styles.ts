import { themes } from '@/themes';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: themes.colors.gray[400],
    width: '100%',
    alignItems: 'center',
  },
  textBold: {
    fontSize: 14,
    fontFamily: themes.fontFamily.inter.bold,
    color: themes.colors.gray[300]
  },
  text: {
    fontSize: 14,
    fontFamily: themes.fontFamily.inter.regular,
    color: themes.colors.gray[300]
  },
  image: {
    marginBottom: 16,
    marginTop: 48
  }
});