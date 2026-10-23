import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { cores } from '../styles/theme';

export default function RegisterScreen({ navigation }) {
  const [form, setForm] = useState({ nome: '', email: '', senha: '', confirmar: '' });

  function alterar(campo, valor) {
    setForm({ ...form, [campo]: valor });
  }

  function handleRegistrar() {
    if (form.senha !== form.confirmar) {
      alert('As senhas não conferem');
      return;
    }
    alert('Conta criada!');
    navigation.goBack();
  }

  return (
    <ScrollView
      style={styles.tela}
      contentContainerStyle={styles.conteudo}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.titulo}>Criar conta</Text>
      <Text style={styles.subtitulo}>Preencha seus dados</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        value={form.nome}
        onChangeText={(valor) => alterar('nome', valor)}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={form.email}
        onChangeText={(valor) => alterar('email', valor)}
      />
      <View style={styles.linha}>
        <TextInput
          style={[styles.input, styles.metade]}
          placeholder="Senha"
          secureTextEntry
          value={form.senha}
          onChangeText={(valor) => alterar('senha', valor)}
        />
        <TextInput
          style={[styles.input, styles.metade]}
          placeholder="Confirmar"
          secureTextEntry
          value={form.confirmar}
          onChangeText={(valor) => alterar('confirmar', valor)}
        />
      </View>
      <TouchableOpacity style={styles.botao} onPress={handleRegistrar}>
        <Text style={styles.botaoTexto}>CADASTRAR</Text>
      </TouchableOpacity>
      <View style={styles.rodape}>
        <Text>Já tem conta? </Text>
        <Text style={styles.link} onPress={() => navigation.goBack()}>
          Entrar
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tela: { backgroundColor: cores.fundo },
  conteudo: { flexGrow: 1, justifyContent: 'center', padding: 24, gap: 12 },
  titulo: { fontSize: 26, fontWeight: 'bold', color: cores.texto },
  subtitulo: { color: cores.cinza, marginBottom: 12 },
  input: {
    height: 50,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dfe6e9',
    backgroundColor: cores.branco,
  },
  linha: { flexDirection: 'row', gap: 12 },
  metade: { flex: 1 },
  botao: {
    height: 50,
    marginTop: 8,
    borderRadius: 10,
    backgroundColor: cores.primaria,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoTexto: { color: cores.branco, fontWeight: 'bold', fontSize: 16 },
  rodape: { flexDirection: 'row', justifyContent: 'center' },
  link: { color: cores.primaria, fontWeight: 'bold' },
});
