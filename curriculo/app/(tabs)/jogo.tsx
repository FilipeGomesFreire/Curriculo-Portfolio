import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert, ScrollView } from 'react-native';
import VoltarHome from '@/components/VoltarHome';

export default function JogoSenha() {
  const [senha, setSenha] = useState(gerarSenhaAleatoria(4));
  const [tentativa, setTentativa] = useState('');
  const [tentativas, setTentativas] = useState<string[]>([]);
  const [resultados, setResultados] = useState<string[]>([]);
  const [tentativasRestantes, setTentativasRestantes] = useState(10);
  const [jogoFinalizado, setJogoFinalizado] = useState(false);

  function gerarSenhaAleatoria(tamanho: number): string {
    const digitos: number[] = [];
    while (digitos.length < tamanho) {
      const n = Math.floor(Math.random() * 10);
      if (!digitos.includes(n)) {
        digitos.push(n);
      }
    }
    return digitos.join('');
  }

  function verificarTentativa() {
  if (tentativa.length !== senha.length) {
    Alert.alert('Erro', `Digite exatamente ${senha.length} dígitos.`);
    return;
  }

  // Verifica se os dígitos são únicos
  const tentativaSet = new Set(tentativa.split(''));
  if (tentativaSet.size !== tentativa.length) {
    Alert.alert('Erro', 'Os dígitos não podem se repetir!'); //não tinha entendido bem o jogo e tentei isso kkkkk 
    return;
  }

  const tentativaArr = tentativa.split('');
  const senhaArr = senha.split('');

  let corretos = 0;
  let malColocados = 0;

  const senhaUsada = Array(senhaArr.length).fill(false);
  const tentativaUsada = Array(tentativaArr.length).fill(false);

  // Primeiro: verifica os corretos no lugar certo
  for (let i = 0; i < senhaArr.length; i++) {
    if (tentativaArr[i] === senhaArr[i]) {
      corretos++;
      senhaUsada[i] = true;
      tentativaUsada[i] = true;
    }
  }

  // Segundo: verifica os corretos no lugar errado
  for (let i = 0; i < tentativaArr.length; i++) {
    if (!tentativaUsada[i]) {
      for (let j = 0; j < senhaArr.length; j++) {
        if (!senhaUsada[j] && tentativaArr[i] === senhaArr[j]) {
          malColocados++;
          senhaUsada[j] = true;
          break;
        }
      }
    }
  }

  const resultado = `✔️ No lugar certo: ${corretos} | ✖️ Fora do lugar: ${malColocados}`;

  setTentativas([tentativa, ...tentativas]);
  setResultados([resultado, ...resultados]);
  setTentativa('');
  setTentativasRestantes((prev) => prev - 1);

  if (tentativa === senha) {
    Alert.alert('Parabéns!', 'Você acertou a senha!');
    setJogoFinalizado(true);
  } else if (tentativasRestantes - 1 === 0) {
    Alert.alert('Fim de jogo', `Você perdeu! A senha era: ${senha}`);
    setJogoFinalizado(true);
  }
}


  function reiniciarJogo() {
    setSenha(gerarSenhaAleatoria(4));
    setTentativa('');
    setTentativas([]);
    setResultados([]);
    setTentativasRestantes(10);
    setJogoFinalizado(false);
  }

  function mostrarSenha() {
    Alert.alert('Senha atual', senha);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Jogo da Senha</Text>
      <Text style={styles.legenda}>✔️ = Dígito certo no lugar certo{'\n'}✖️ = Dígito certo no lugar errado</Text>

      <Text style={styles.label}>Digite {senha.length} dígitos únicos:</Text>
      <TextInput
        style={styles.input}
        value={tentativa}
        onChangeText={setTentativa}
        keyboardType="numeric"
        maxLength={senha.length}
        editable={!jogoFinalizado}
      />

      <Button title="Verificar" onPress={verificarTentativa} disabled={jogoFinalizado} />
      <View style={styles.spacer} />
      <Button title="Mostrar senha" onPress={mostrarSenha} />
      <View style={styles.spacer} />
      {jogoFinalizado && <Button title="Jogar novamente" onPress={reiniciarJogo} />}

      <Text style={styles.label}>Tentativas restantes: {tentativasRestantes}</Text>

    

      <FlatList
        data={tentativas.map((tent, index) => ({ key: `${index}`, tentativa: tent, resultado: resultados[index] }))}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.tentativa} → {item.resultado}</Text>
        )}
        ListEmptyComponent={<Text style={styles.label}>Nenhuma tentativa ainda.</Text>}
      />
        <VoltarHome />
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    minHeight: '100%',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  legenda: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    marginBottom: 10,
  },
  item: {
    fontSize: 16,
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  spacer: {
    marginVertical: 10,
  },
});
