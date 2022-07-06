# NodeJS_Livraria
 Node.JS com API REST e Express e MongoDB

Informação: o projeto se baseia em Node.JS com API REST com Express e MongoDB.

 Partes do projeto
Node versão 16.14.0
npm -v 8.3.1

Criação de pasta através do prompt mkdir nome da pasta
entrar na pasta cd nome da pasta
npm init -y você criar o package.json
se tiver o visual studio code dentro do prompt digite code .   assim abrira o visual automaticamente 

Instale no terminal do visual studio code  npm install nodemon@2.0.15 -D

Para usar o nodemon precisa alterar o package.json onde tem scripts precisa criar dentro dele "dev": "nodemon server.js" para rodar no terminal do visual studio code  com npm run dev
 com isso cada vez que alterar arquivos que sejam js , mjs, json ele fara automaticamente (lembre-se de salvar os arquivos. exemplo: server.js)

o nodemon serve para não ter que ficar parando e subindo o servidor sucessivamente.


instalar o npm express:
 npm  install express@4.17.3

Lembrar de rodar o servidor no terminal com 
 npm run dev

rotas
http://localhost:3000/
http://localhost:3000/livros

Instale o postman para realizar a consulta também utilizar o GET, POST, DELETE etc.

Utilizando o MongoDB Atlas:

https://account.mongodb.com/account/login?signedOut=true

1 passo Crie sua conta com o google
2 passo em Database ao lado esquerdo da tela clica nele em seguida ao lado direito tem o create clica nele escolha a opção Shared logo abaixo em Cloud Provider & Region escolha aws em  Cluster Name logo abaixo você escolhe um nome ou não, no final da tela clique em create cluster siga os próximos passos. Caso não consiga configurar tudo, va a pagina inicial e va em security ao lado esquerdo da tela em Database Acess assim configura o email e sua senha e embaixo tem do Security tem Network Acess onde você clica para configurar o ip 
Pois precisara para para utilizar no vsc e criar a comunicação

utilizar a biblioteca Mongoose

https://mongoosejs.com/

instale no terminal npm install mongoose@6.2.6

como fara a conexão com o Atlas no banco MongoDB  faremos por uma versão local então você vai no MongoDb em Database e tem a opção connect clica e vai aparecer as opções clique em connect your application isso vai gerar uma string de conexão (veja qual é sua versão do NodeJS) copie a string  e coloque na string de conexão fique atento ao password pois tera que colocar o que escolheu retire o ?retryWrites=true&w=majority e coloque o nome do Database que você criou. Depois que criar seu Schema em Livros.js , depois em app.js você faz a importação do livro terminado essa parte você vai no Postman e faz a consulta atraves da requisição GET http://localhost:3000/livros


