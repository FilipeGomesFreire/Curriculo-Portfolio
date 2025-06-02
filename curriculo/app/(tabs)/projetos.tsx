import { View, Text, StyleSheet, Linking, Pressable } from 'react-native';

export default function Projetos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projetos</Text>

      <View style={styles.projeto}>
        <Text style={styles.nome}>Sistema de Reconhecimento Facial com ESP32</Text>
        <Text style={styles.desc}>
          Projeto integrando IA com hardware embarcado para acesso automatizado.
        </Text>
        <Pressable onPress={() => Linking.openURL('https://github.com/FilipeGomesFreire')}>
          <Text style={styles.link}>Ver no GitHub</Text>
        </Pressable>
      </View>

      <View style={styles.projeto}>
        <Text style={styles.nome}>Jogo Senha com React Native</Text>
        <Text style={styles.desc}>
          Implementação do jogo Bulls and Cows com feedback visual e lógica customizada.
        </Text>
        <Pressable onPress={() => Linking.openURL('https://github.com/FilipeGomesFreire')}>
          <Text style={styles.link}>Ver no GitHub</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  projeto: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 10,
    gap: 6,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 14,
    color: '#333',
  },
  link: {
    fontSize: 14,
    color: '#007bff',
    textDecorationLine: 'underline',
  },
});
