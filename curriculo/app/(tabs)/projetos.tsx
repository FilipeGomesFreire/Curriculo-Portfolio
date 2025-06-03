import { View, Text, StyleSheet, Linking, Pressable } from 'react-native';
import VoltarHome from '@/components/VoltarHome';
import { ScrollView } from 'react-native';

export default function Projetos() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Projetos</Text>

      <View style={styles.projeto}>
        <Text style={styles.nome}>Sistema de Reconhecimento Facial com ESP32</Text>
        <Text style={styles.desc}>
          Projeto integrando IA com hardware embarcado para acesso automatizado.
        </Text>
        <Pressable onPress={() => Linking.openURL('https://github.com/FilipeGomesFreire/backendPythonIA')}>
          <Text style={styles.link}>Ver no GitHub</Text>
        </Pressable>
      </View>

      <View style={styles.projeto}>
        <Text style={styles.nome}>DieDice</Text>
        <Text style={styles.desc}>
          Meu primeiro jogo, criado sem qualquer conhecimento de programação, com 8 personagens jogaveis, vale a pena testar.
        </Text>
        <Pressable onPress={() => Linking.openURL('https://github.com/FilipeTrap/joguinhoamostra')}>
          <Text style={styles.link}>Ver no GitHub</Text>
        </Pressable>
        <Pressable onPress={() => Linking.openURL('https://vercel-joguinho.vercel.app/')}>
          <Text style={styles.link}>Jogue agora pelo Vercel</Text>
        </Pressable>
      </View>
          
      <View style={styles.projeto}>
        <Text style={styles.nome}>Jogo da Velha 2</Text>
        <Text style={styles.desc}>
          Inspirado em um vídeo do&nbsp;
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://www.tiktok.com/@clebitoyt/video/7280661786972491013')}
          >
            TikTok
          </Text>
          , este jogo foi criado por mim em apenas dois dias.
        </Text>

        <Pressable onPress={() => Linking.openURL('https://github.com/FilipeTrap/Jogodavelha2')}>
          <Text style={styles.link}>Ver no GitHub</Text>
        </Pressable>

        <Pressable onPress={() => Linking.openURL('https://jogodavelha2-six.vercel.app/')}>
          <Text style={styles.link}>Jogar agora pelo Vercel</Text>
        </Pressable>
      </View>


          <View style={styles.projeto}>
        <Text style={styles.nome}>ONITAMA</Text>
        <Text style={styles.desc}>
          Inspirado nesse video do&nbsp;
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://www.instagram.com/p/C4f9CPYuI38/?locale=Buy%2Band%2Bsell%2Bcryptocurrencies%2Bin%2Bone%2Bclick.%2BCrest%2BSwap%2Bsupports%2Bany%2Bcombination%2Bof%2Bcryptocurrencies%2C%2Band%2Byou%2Bcan%2Binstantly%2Bswap%2Bassets%2Bwithout%2Btrading..ekaq&hl=ml')}
          >
            Instagram
          </Text>
          , criei o jogo completo e funcional podendo ser jogado com duas pessoas.
        </Text>

        <Pressable onPress={() => Linking.openURL('https://github.com/FilipeTrap/10-jooj-ONITAMA')}>
          <Text style={styles.link}>Ver no GitHub</Text>
        </Pressable>

        <Pressable onPress={() => Linking.openURL('https://onitamatrap.vercel.app/')}>
          <Text style={styles.link}>Jogar agora pelo Vercel</Text>
        </Pressable>
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
