# Teste Front-end - QuikDev

### TESTE PROPOSTO

Criar uma aplicacao web com as seguintes funcionalidades:
- Sistema de autenticacao, cadastro, login, logout;
- Exibiçao de posts com comenários;
- Ediçao e remoçao de posts.

### PROJETO

## Stack

<p align="justify"> Este é um projeto de front-end utilizando Typescript (ReactJS) e CSS (styled-components); </p>
<p align="justify"> Para consumir a API foi utilizado o axios; </p>
<p align="justify"> O gerenciamento de rotas foi realizado através do react-router-dom; </p>
<p align="justify"> Para auxílio na construçao da interface, foi utilizado o Material-UI. </p>

## O que o projeto é capaz de fazer

<p align="justify"> - Ele é dividido em duas partes: pública e privada; </p>

<p align="justify"> - Na área pública, é possível apenas ver a HomePage, cadastrar um usuário ou fazer login; </p>

<p align="justify"> - Na área privada - somente usuários com cadastro tem acesso, é possível ver posts, ver usuários, ver comentários, excluir, editar e adicionar posts; </p>

## Instruções Para Rodar

<p align="justify"> 1. Para instalar todas as dependências: </p>

> npm install 

<p align="justify"> 2. Para rodar localmente o projeto:</p>

> npm run start 

<p align="justify"> 3. Para gerar uma versão estática do projeto (que ficará na pasta "build").</p>

> npm run build 

## Deploy da Aplicação 

> https://frontend-test-quikdev.vercel.app/

## API Consumida

<a href="https://jsonplaceholder.typicode.com/">JSONPlaceholder</a>

## Autenticaçao

<p align="justify"> Para login utilizar as credenciais: </p>

```
username: teste
senha: teste
```

<p align="justify"> Para cadastro utilizar as credenciais: </p>

``` 
name: teste 
username: teste 
senha: teste
```

## Rotas

``` "/" ``` - Página inicial <br />
``` "/register" ``` - Fazer registro <br />
``` "/login" ``` - Fazer login <br />
``` "/posts" ``` - Lista todos os posts <br />
``` "/posts/:id" ``` - Detalha determinado post <br />
``` "/users" ``` - Lista todos os usuários <br />
``` "/users/:id/posts" ``` - Lista todos os posts de determinado usuário <br />
``` "/users/:id/posts/new" ``` - Cria um novo post <br />
```"/users/:id/posts/new/:postId" ``` - Edita um post existente <br />

## Contato

<p align="justify"> Renata Karato </p>
<p align="justify"> Desenvolvedora Front-end </p>
<p align="justify"> 11 9 9763-7438 </p>

[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/rmkarato)](https://github.com/rmkarato)       [![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/rmkarato/)](https://www.linkedin.com/in/rmkarato/)
[![Whatsapp Badge](https://img.shields.io/badge/-Whatsapp-4CA143?style=flat-square&labelColor=4CA143&logo=whatsapp&logoColor=white&link=https://api.whatsapp.com/send?phone=seu_telefone_5511997637438&text=Olá!)](https://api.whatsapp.com/send?phone=seu_telefone_5511997637438&text=Olá!)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:rmkarato@gmail.com)](mailto:rmkarato@gmail.com)

