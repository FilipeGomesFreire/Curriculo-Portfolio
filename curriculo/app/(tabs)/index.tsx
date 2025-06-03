import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Meu Currículo</Text>
      <Text style={styles.subtitle}>
        Explore abaixo minha trajetória, projetos e jogue o Jogo da Senha!
      </Text>

      <View style={styles.buttonContainer}>
        <Button title="Experiência Acadêmica" onPress={() => router.push('/(tabs)/experiencia-academica')} />
        <Button title="Experiência Profissional" onPress={() => router.push('/(tabs)/experiencia-profissional')} />
        <Button title="Projetos" onPress={() => router.push('/(tabs)/projetos')} />
        <Button title="Sobre" onPress={() => router.push('/(tabs)/sobre')} />
        <Button title="Jogo da Senha" onPress={() => router.push('/(tabs)/jogo')} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    flexGrow: 1,
     backgroundColor: '#e0e0e0',
    minHeight: '100%',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
   
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: 'gray',
  },
  buttonContainer: {
    width: '100%',
    gap: 10,
  },
});
