# CRUD Fullstack - REST API para Produtos

Este projeto é um sistema completo (Fullstack) para gerenciamento da entidade "Produto". Ele foi desenvolvido utilizando **React** no front-end e **Django** no back-end, com um banco de dados **PostgreSQL**. Toda a aplicação está dockerizada e utiliza o Docker Compose para orquestrar os serviços.

## 🚀 Tecnologias Utilizadas

- **Front-end:** React (gerado com Vite) e Chakra UI para estilização dos componentes.
- **Back-end:** Django & Python, com Django Rest Framework para criação das APIs.
- **Banco de Dados:** PostgreSQL.
- **Infraestrutura:** Docker e Docker Compose para containerização.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- [Docker](https://www.docker.com/get-started)
- [Node.js & npm](https://nodejs.org/)

## 🚀 Começando

### 1. Clone este repositório

```bash
git clone https://github.com/estelafs/rest_api_products.git
```

### 2. Navegue até o diretório do projeto

```bash
cd rest_api_products
```

### 3. Inicie a aplicação
Na pasta raiz do projeto, execute o comando:
```bash
docker-compose up --build
```
Este comando irá construir e iniciar os contêineres para o front-end, back-end e o banco de dados.

### 4. Acesse a aplicação
- Front-end: Acesse http://localhost:3000 para interagir com a interface do usuário.
- Back-end (API): Acesse http://localhost:8000/api/products/ para interagir com as APIs.

## 🛠️ Estrutura do Projeto
- **back-end/**: Contém o código do back-end em Django, incluindo as APIs. O PostgreSQL é usado como banco de dados, e está containerizado e acessível através do back-end.
- **front-end/**: Contém o código do front-end em React, gerado com Vite e estilizado com Chakra UI.
- **docker-compose.yml**: Arquivo de configuração para orquestrar os contêineres com Docker Compose.
