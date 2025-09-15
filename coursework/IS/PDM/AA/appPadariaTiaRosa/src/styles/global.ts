import { StyleSheet } from 'react-native';
import { colors, spacing, fontSizes } from '../theme/theme';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.m,
  },
  title: {
    fontSize: fontSizes.large,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: spacing.m,
  },
  text: {
    fontSize: fontSizes.medium,
    color: colors.text,
  },
});