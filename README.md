# AppTCSW2

Aplicativo didático desenvolvido com React Native e Expo para praticar componentes, formulários, Flexbox e navegação entre telas.

O projeto foi construído a partir de um tutorial de React Native e reúne os exemplos em um aplicativo funcional, testado em um dispositivo Android real com Expo Go.

## Funcionalidades

- Tela de login com campos de e-mail e senha.
- Tela de cadastro com validação de confirmação de senha.
- Navegação em pilha entre Login, Cadastro e área principal.
- Navegação inferior com as abas Início, Busca, Pedidos e Perfil.
- Passagem de parâmetros entre telas.
- Tela inicial com cards, atalhos, grade responsiva e rolagem.
- Perfil com nome, e-mail e logout.
- Logout que limpa o histórico de navegação.
- Layout construído com Flexbox.
- Tema de cores compartilhado entre as telas.

## Tecnologias

- Expo SDK 58
- React 19
- React Native 0.88
- JavaScript
- React Navigation 7
- Expo Vector Icons
- ESLint

## Pré-requisitos

Para executar o projeto, instale:

- Node.js 22.13 ou superior
- npm
- Expo Go no celular Android ou iOS
- Android Debug Bridge (ADB), opcional para abrir pelo cabo USB

## Instalação

Clone o repositório:

```bash
git clone https://github.com/ThHSzR/apptcsw2.git
cd apptcsw2
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npx expo start
```

Abra o Expo Go e leia o QR Code exibido no terminal.

Se o celular e o computador não estiverem na mesma rede, use:

```bash
npx expo start --tunnel
```

## Executar pelo ADB

Com a depuração USB ativada e o aparelho autorizado:

```bash
adb devices
npm run android
```

Se o comando `adb` não estiver no `PATH`, informe o diretório do Android SDK antes de iniciar o Expo.

Exemplo no Linux:

```bash
export ANDROID_HOME="$HOME/Android/Sdk"
export ANDROID_SDK_ROOT="$ANDROID_HOME"
export PATH="$ANDROID_HOME/platform-tools:$PATH"
npm run android
```

## Como testar o aplicativo

1. Na tela de Login, toque em **Cadastre-se**.
2. Confira a tela de Cadastro e volte usando **Entrar** ou a seta do cabeçalho.
3. Digite um e-mail na tela de Login.
4. Toque em **ENTRAR**.
5. O aplicativo abrirá a aba Perfil com o nome e o e-mail recebidos por parâmetro.
6. Alterne entre Início, Busca, Pedidos e Perfil.
7. Toque em **SAIR**.
8. Pressione o botão Voltar do Android e confirme que a área autenticada não é aberta novamente.

O login e o cadastro são simulados. Nenhuma informação é enviada para um servidor.

## Estrutura do projeto

```text
apptcsw2/
├── App.js
├── app.json
├── index.js
├── src/
│   ├── navigation/
│   │   ├── AppRoutes.js
│   │   └── TabRoutes.js
│   ├── screens/
│   │   ├── HomeScreen.js
│   │   ├── LoginScreen.js
│   │   ├── PerfilScreen.js
│   │   └── RegisterScreen.js
│   └── styles/
│       └── theme.js
└── assets/
```

## Navegação

```text
NavigationContainer
└── Stack Navigator
    ├── Login
    ├── Registro
    └── Principal
        └── Bottom Tab Navigator
            ├── Início
            ├── Busca
            ├── Pedidos
            └── Perfil
```

## Comandos disponíveis

```bash
npm start          # inicia o Metro Bundler
npm run android    # abre no Android
npm run ios        # abre no simulador iOS, disponível no macOS
npm run web        # abre a versão web
npm run lint       # verifica o código com ESLint
```

## Verificações realizadas

- Compatibilidade das dependências com o Expo SDK 58.
- Expo Doctor com 20 verificações aprovadas.
- ESLint sem erros.
- Verificação estática dos arquivos JavaScript.
- Geração do bundle Android.
- Teste completo em um Samsung SM-A736B conectado por ADB.

## Próximos passos

- Integrar uma API real para cadastro e autenticação.
- Armazenar o token de acesso com segurança.
- Implementar as telas Busca e Pedidos.
- Validar campos obrigatórios e formatos de e-mail.
- Adicionar testes automatizados.
- Criar uma development build para uso fora do Expo Go.

## Licença

Este projeto está disponível sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais informações.
