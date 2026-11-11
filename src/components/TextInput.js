import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

export default function TextInput(props) {
  return <NativeTextInput placeholderTextColor={colors.gray} {...props} style={[styles.input, props.style]} />;
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 6,
    padding: 12,
    fontSize: 16,
    color: colors.black,
  },
});
