import { themes } from '@/themes';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 24,
    marginTop: -26
  },
  input: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: themes.colors.gray[500],
    borderRadius: 6,
    borderWidth: 1,
    borderColor: themes.colors.gray[700],
    color: themes.colors.gray[100]
  },
  button: {
    padding: 18,
    backgroundColor: themes.colors.blue[700],
    borderRadius: 6,
    marginLeft: 4
  }
});