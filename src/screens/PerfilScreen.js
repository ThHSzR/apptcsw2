import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { cores } from '../styles/theme';

export default function PerfilScreen({ navigation, route }) {
  const nome = route.params?.nome ?? 'Visitante';
  const email = route.params?.email ?? '-';

  function sair() {
    navigation.getParent().reset({ index: 0, routes: [{ name: 'Login' }] });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.email}>{email}</Text>
      <TouchableOpacity style={styles.botao} onPress={sair}>
        <Text style={styles.botaoTexto}>SAIR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    backgroundColor: cores.fundo,
  },
  nome: { fontSize: 22, fontWeight: 'bold' },
  email: { color: cores.cinza },
  botao: {
    marginTop: 24,
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: '#d63031',
  },
  botaoTexto: { color: cores.branco, fontWeight: 'bold' },
});
