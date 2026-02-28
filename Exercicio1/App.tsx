import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default function App() {
  const [name, setName] = useState('');

  const handleButtonPress = () => {
    Alert.alert(`Alerta! O nome digitado é: ${name}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Digite seu nome:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Seu nome aqui"
      />
      <Button
        title=" Alerta"
        onPress={handleButtonPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});