# 💬 Chat em Tempo Real com Múltiplas Salas (Socket.IO + Node.js)

Projeto de **chat em tempo real** com suporte a **múltiplas salas**, desenvolvido com **Node.js**, **Express** e **Socket.IO**. O sistema permite que usuários escolham entre quatro salas diferentes para trocar mensagens com outras pessoas conectadas na mesma sala.

---

## 📦 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Socket.IO](https://socket.io/)

---

## 🎯 Funcionalidades

- Interface web com seleção de uma entre 4 salas disponíveis.
- Envio e recebimento de mensagens em tempo real.
- Comunicação isolada por sala (somente quem estiver na mesma sala recebe as mensagens).
- Simples de testar localmente com múltiplas abas.

---
 ## ✅ Como Testar o Chat
- Abra 8 abas no navegador.

- Em cada par de abas, selecione uma sala diferente (Sala 1, Sala 2, Sala 3 e Sala 4).

- Clique em "Entrar na Sala" para se conectar.

- Envie mensagens em cada aba.

- Verifique se as mensagens aparecem apenas nas abas conectadas à mesma sala.

## 🗂️ Estrutura do Projeto

 - socket-chat/
 - ├── public/
 - │   └── index.html       # Interface do usuário
 - ├── index.js             # Servidor principal com configuração do Socket.IO
 - ├── package.json         # Configurações do projeto e dependências
 - └── README.md            # Documentação do projeto

## 👨‍💻 Autor

Desenvolvido por Lucas Timponi Mercadante Castro RA: 2304913

**https://github.com/luctmc**
**https://github.com/luctmc/Chat_Socket**
