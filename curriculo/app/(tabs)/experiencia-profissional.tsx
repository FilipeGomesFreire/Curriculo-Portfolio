import { View, Text, StyleSheet } from 'react-native';
import VoltarHome from '@/components/VoltarHome';
import { ScrollView } from 'react-native';

export default function ExperienciaProfissional() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Experiência Profissional</Text>

      <View style={styles.bloco}>
        <Text style={styles.cargo}>Auxiliar Adminisrtativo</Text>
        <Text style={styles.empresa}>Contax</Text>
        <Text style={styles.periodo}>2008 – 2010</Text>
        <Text style={styles.desc}>
          Suporte e atendimento ao cliente.
        </Text>
      </View>

      <View style={styles.bloco}>
        <Text style={styles.cargo}>Auxiliar Adminisrtativo</Text>
        <Text style={styles.empresa}>Escola Adventista de San Martin</Text>
        <Text style={styles.periodo}>2011 – 2013</Text>
        <Text style={styles.desc}>
          Na prática eu dava aulas de informatica, era o cara do TI e tudo.
        </Text>
      </View>

            <View style={styles.bloco}>
        <Text style={styles.cargo}>Auxiliar Adminisrtativo</Text>
        <Text style={styles.empresa}>Recife Sexshop</Text>
        <Text style={styles.periodo}>2017 – 2021</Text>
        <Text style={styles.desc}>
          Gerenciava uma rede de 5 sexshops junto com um estoque.
        </Text>
      </View>
      
                  <View style={styles.bloco}>
        <Text style={styles.cargo}>Estagiario em Desenvolvimento</Text>
        <Text style={styles.empresa}>Hidramac</Text>
        <Text style={styles.periodo}>Mai/2025 – atual</Text>
        <Text style={styles.desc}>
          Ajudo em desenvolvimento, criações de placas de circuito impresso e eletrica automotiva.
        </Text>
      </View>
      
<VoltarHome />
    </ScrollView>
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
