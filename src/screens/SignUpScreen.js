import React from 'react';
import { ScrollView, Text, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextInput from '../components/TextInput';
import { colors } from '../utils/colors';

export default function SignUpScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Sign Up</Text>
        <TextInput placeholder="Meno" accessibilityLabel="Meno" autoCapitalize="words" />
        <TextInput placeholder="E-mail" accessibilityLabel="E-mail" keyboardType="email-address" autoCapitalize="none" autoCorrect={false} />
        <TextInput placeholder="Heslo" accessibilityLabel="Heslo" secureTextEntry />
        <TextInput placeholder="Potvrdiť heslo" accessibilityLabel="Potvrdiť heslo" secureTextEntry />
        <Button title="Späť" color={colors.blue} onPress={() => navigation.goBack()} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  content: { flexGrow: 1, justifyContent: 'center', padding: 24, gap: 16 },
  title: { fontSize: 28, textAlign: 'center', color: colors.black },
});
