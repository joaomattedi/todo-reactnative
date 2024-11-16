import { themes } from '@/themes';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 12,
    backgroundColor: themes.colors.gray[500],
    borderColor: themes.colors.gray[400],
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 8
  },
  text: {
    color: themes.colors.gray[100],
    flexGrow: 1
  },
  checked: {
    textDecorationLine: 'line-through',
    color: themes.colors.gray[300],
    flexGrow: 1
  },
  check: {
    marginLeft: 12
  },
  trash: {
    marginRight: 12
  }
});