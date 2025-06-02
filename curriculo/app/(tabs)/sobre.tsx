import { View, Text, StyleSheet } from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o App</Text>
      <Text style={styles.text}>
        Este aplicativo foi desenvolvido como parte de uma atividade utilizando:
      </Text>

      <View style={styles.lista}>
        <Text style={styles.text}>• React Native com Expo</Text>
        <Text style={styles.text}>• Expo Router</Text>
        <Text style={styles.text}>• React Navigation (via Tabs)</Text>
        <Text style={styles.text}>• react-native-elements</Text>
        <Text style={styles.text}>• react-native-vector-icons</Text>
        <Text style={styles.text}>• Expo Go (para testes no celular)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 12,
    color: '#ffffff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  text: {
    fontSize: 16,
    color: '#ffffff',
  },
  lista: {
    paddingLeft: 10,
    gap: 6,
  },
});
