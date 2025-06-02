import { View, Text, StyleSheet } from 'react-native';

export default function ExperienciaProfissional() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiência Profissional</Text>

      <View style={styles.bloco}>
        <Text style={styles.cargo}>Estágio em Desenvolvimento Web</Text>
        <Text style={styles.empresa}>Instituto Federal do Piauí</Text>
        <Text style={styles.periodo}>Fev/2024 – Atual</Text>
        <Text style={styles.desc}>
          Desenvolvimento de aplicações web com React, Node.js e integração com APIs.
        </Text>
      </View>

      <View style={styles.bloco}>
        <Text style={styles.cargo}>Freelancer em Automação IoT</Text>
        <Text style={styles.empresa}>Projetos pessoais</Text>
        <Text style={styles.periodo}>2022 – Atual</Text>
        <Text style={styles.desc}>
          Projetos com ESP32 e Arduino, incluindo sistemas de acesso, automação residencial e sensores.
        </Text>
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
    gap: 6,
  },
  cargo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  empresa: {
    fontSize: 16,
    color: 'gray',
  },
  periodo: {
    fontSize: 14,
    fontStyle: 'italic',
  },
  desc: {
    fontSize: 14,
    color: '#333',
  },
});
