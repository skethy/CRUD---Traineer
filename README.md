# Treinamento

Este repositório faz parte do processo de treinamento do backend da softeam.

### Estrutura de Pastas
```
### Layout típico de diretório top-level

.
├── node_modules            # Onde as dependências estão instaladas
├── controllers             # Onde o controle da aplicação fica, no nosso caso as operações de criar, remover, atualizar e buscar (Crud) 
    └── tests               # teste da nossa aplicação
├── models                  # Modelos do banco de dados
├── router                  # Rotas da aplição 
├── index.js                # Ponto de entrada da api
├── package.json
└── README.md

```

### Tech

Treinamento usa vários projetos de código aberto para funcionar corretamente:

* [node.js] - Node.js é um interpretador de código JavaScript com o código aberto, focado em migrar o Javascript do lado do cliente para servidores.
* [NPM] - É um gerenciador de pacotes para a linguagem de programação JavaScript.
* [Jest] - É uma biblioteca para testar o código JavaScript, e é um projeto de código aberto mantido pelo Facebook.

### Instalação

Treinamento requer os seguintes recursos instalados:

[Node.js]

[MongoDB]

Além disso as seguintes ferramentas foram usadas: 

[Postman] 

[VSCode]

[Swagger]

Instale as dependências e execute o aplicativo da seguinte maneira:

```sh
$ git clone https://github.com/chanudinho/treinamento
$ cd treinamento
$ npm install
$ npm start
```

### Scripts Disponíveis

No diretório do projeto, você pode executar:

#### `npm start`

Executa a apu no modo de desenvolvimento.<br>
abra [http://localhost:8000](http://localhost:5000) para testar no Postman ou aplicativo de sua escolha.

O aplicativo é atualizado automaticamente se você fizer edições.<br>
Você irá ver os erros no console da aplicação.

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


[node.js]: <http://nodejs.org>  
[NPM]: <https://www.npmjs.com/>
[MongoDB]: <https://www.mongodb.com/>
[Udacity Git Commit]: <https://udacity.github.io/git-styleguide/>
[Jest]: <https://jestjs.io/>
[Postman]: <https://www.getpostman.com/>
[VSCode]: <https://code.visualstudio.com/>
[Swagger]: <https://swagger.io>