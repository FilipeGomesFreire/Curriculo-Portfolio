import { View, Text, StyleSheet } from 'react-native';

export default function ExperienciaAcademica() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiência Acadêmica</Text>

      <View style={styles.bloco}>
        <Text style={styles.curso}>Sistemas para Internet</Text>
        <Text style={styles.instituicao}>Instituto Federal do Piauí (IFPI)</Text>
        <Text style={styles.periodo}>2022 – Atual</Text>
      </View>

      <View style={styles.bloco}>
        <Text style={styles.curso}>Ensino Médio Técnico em Informática</Text>
        <Text style={styles.instituicao}>ETEC - Escola Técnica Estadual</Text>
        <Text style={styles.periodo}>2018 – 2020</Text>
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
  bloco: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 10,
    gap: 4,
  },
  curso: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  instituicao: {
    fontSize: 16,
    color: 'gray',
  },
  periodo: {
    fontSize: 14,
    fontStyle: 'italic',
  },
});
