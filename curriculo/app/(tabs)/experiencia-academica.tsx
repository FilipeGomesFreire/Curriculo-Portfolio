import { View, Text, StyleSheet } from 'react-native';
import VoltarHome from '@/components/VoltarHome';

export default function ExperienciaAcademica() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiência Acadêmica</Text>

      <View style={styles.bloco}>
        <Text style={styles.curso}>Sistemas para Internet</Text>
        <Text style={styles.instituicao}>Universidade Católica de Pernambuco(UNICAP)</Text>
        <Text style={styles.periodo}>2023.2 – Atual</Text>
      </View>

      <View style={styles.bloco}>
        <Text style={styles.curso}>Python Basico</Text>
        <Text style={styles.instituicao}>DSA - DATA SCIENCE ACADEMY</Text>
        <Text style={styles.periodo}>24 horas</Text>
      </View>
     
      <VoltarHome />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 20,
     backgroundColor: '#e0e0e0',
    minHeight: '100%',
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
