import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { spacing, colors } from '../theme/theme';

type Props = {
  placeholder?: string;
  onSearch: (q: string) => void;
};

export default function SearchBar({ placeholder = 'Buscar produtos...', onSearch }: Props) {
  const [value, setValue] = useState('');
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  function handleChange(text: string) {
    setValue(text);
    if (timer.current) clearTimeout(timer.current);
    // debounce 300ms
    timer.current = window.setTimeout(() => {
      onSearch(text);
    }, 300);
  }

  function clear() {
    setValue('');
    if (timer.current) clearTimeout(timer.current);
    onSearch('');
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={handleChange}
        style={styles.input}
        accessibilityLabel="search"
      />
      {value.length > 0 && (
        <TouchableOpacity onPress={clear} style={styles.clearButton} accessibilityLabel="clear-search">
          <Text style={styles.clearText}>✕</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.m,
    paddingVertical: spacing.s / 2,
  },
  input: {
    backgroundColor: '#fff',
    padding: spacing.s,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },
  clearButton: {
    position: 'absolute',
    right: spacing.m + 6,
    top: spacing.s / 2,
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearText: {
    color: colors.muted,
    fontSize: 14,
  },
});
