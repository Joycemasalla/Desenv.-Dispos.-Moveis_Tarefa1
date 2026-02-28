import React, { useState } from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  Button 
} from 'react-native';

export default function App() {

  const [itens, setItens] = useState<string[]>([]);

  const [texto, setTexto] = useState('');

  const adicionarItem = () => {
    if (texto.trim() === '') return;

    setItens([...itens, texto]);
    setTexto(''); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Itens</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite um item"
        placeholderTextColor="#9500ff"
        value={texto}
        onChangeText={setTexto}
      />

      <Button title="Adicionar" onPress={adicionarItem} 
      color="#7a34ac" />

      <ScrollView style={styles.scroll}>
        {itens.map((item, index) => (
          <Text key={index} style={styles.item}>
            {item}
          </Text>
        ))}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  scroll: {
    marginTop: 20,
  },
  item: {
    backgroundColor: '#691ce47e',
    color: '#FFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16,
  },
  
});