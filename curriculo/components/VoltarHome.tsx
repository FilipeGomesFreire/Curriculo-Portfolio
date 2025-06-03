import { Button, View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function VoltarHome() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button title="Voltar para o menu principal" onPress={() => router.push('/(tabs)')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
// só depois de fazer todas as paginas eu lembrei de fazer um botão voltar, ai tive q fazer isso