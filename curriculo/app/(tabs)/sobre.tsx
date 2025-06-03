import { View, Text, StyleSheet } from 'react-native';
import VoltarHome from '@/components/VoltarHome';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o Aplicativo</Text>

      <Text style={styles.text}>
        Este aplicativo foi desenvolvido como parte da disciplina de Desenvolvimento Mobile,
        com o objetivo de apresentar um currículo interativo que utiliza navegação entre telas,
        componentes reutilizáveis e integração com funcionalidades modernas do ecossistema React Native.
      </Text>

      <Text style={styles.text}>
        Tecnologias, bibliotecas e ferramentas utilizadas:
      </Text>

      <View style={styles.lista}>
        <Text style={styles.text}>• React Native com Expo</Text>
        <Text style={styles.text}>• Expo Router (para navegação entre páginas)</Text>
        <Text style={styles.text}>• Expo Go (para testes em dispositivos reais)</Text>
        <Text style={styles.text}>• react-native-elements (interface e componentes)</Text>
        <Text style={styles.text}>• react-native-vector-icons (ícones)</Text>
        <Text style={styles.text}>• Hooks como useRouter e useState</Text>
        <Text style={styles.text}>• Componentes funcionais e estilo via StyleSheet</Text>
        <Text style={styles.text}>• Navegação em abas com layout em (tabs)</Text>
      </View>

      <Text style={styles.text}>
        O projeto também inclui um mini-jogo baseado na lógica do clássico "Bulls and Cows", 
        adaptado para o português e com feedback visual ao usuário.
      </Text>

      <VoltarHome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 12,
    backgroundColor: '#e0e0e0',
    minHeight: '100%',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
  },
  lista: {
    paddingLeft: 10,
    gap: 6,
  },
});
