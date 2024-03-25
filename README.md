# Desafio Nginx com Proxy Reverso e Node.js

## Visão Geral

Este projeto é a solução de um desafio que envolve a configuração de um proxy reverso nginx para interagir com uma aplicação Node.js, a qual, por sua vez, registra dados em um banco de dados MySQL. O objetivo é demonstrar a aplicação prática dos conhecimentos adquiridos sobre nginx como proxy reverso, Node.js e interação com banco de dados MySQL. Ao acessar o nginx, ele fará uma chamada para a aplicação Node.js, que adicionará um nome na tabela `people` do banco de dados MySQL e retornará uma lista dos nomes cadastrados, exibindo a mensagem `<h1>Full Cycle Rocks!</h1>`.

## Pré-requisitos

Para executar este projeto, você precisa ter:

- Docker e Docker Compose instalados em sua máquina.

## Como Executar

Para iniciar o projeto, siga os passos abaixo:

1. Clone este repositório para sua máquina local.
2. Navegue até o diretório do repositório clonado.
3. Execute o comando para iniciar os serviços definidos no `docker-compose.yml`:

```bash
docker-compose up -d
```

Após a execução do comando, todos os serviços (Node.js, Nginx e MySQL) serão iniciados e o sistema estará acessível na porta 8080.

## Detalhes Técnicos

O projeto consiste em três componentes principais:

- **Aplicação Node.js**: Um servidor web simples criado com o Express que adiciona um registro ao banco de dados MySQL e retorna uma página HTML com a lista de nomes cadastrados.
- **Nginx**: Configurado como proxy reverso para encaminhar as requisições para a aplicação Node.js, facilitando o acesso e aumentando a eficiência.
- **Banco de dados MySQL**: Armazena os nomes cadastrados pela aplicação Node.js.

A estrutura do projeto é organizada da seguinte forma:

```
node/
  - Arquivos do projeto Node.js
nginx/
  - Configuração do Nginx
mysql/
  - Script SQL de inicialização
docker-compose.yml
```

O arquivo `docker-compose.yml` define e conecta todos os serviços necessários para a aplicação funcionar corretamente.

## Contribuições

Contribuições para o projeto são bem-vindas. Se tiver sugestões de melhorias ou encontrar algum problema, abra uma issue ou envie um pull request.
