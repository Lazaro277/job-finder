# Job Finder

O **Job Finder** é uma plataforma para divulgação e busca de oportunidades de trabalho na área de tecnologia. O projeto permite consultar vagas disponíveis, pesquisar por títulos e cadastrar novas oportunidades com informações para contato.

## Funcionalidades

- Listagem de vagas cadastradas.
- Pesquisa de vagas pelo título.
- Visualização dos detalhes de cada oportunidade.
- Cadastro de novas vagas.
- Validação dos campos obrigatórios e do e-mail informado.
- Contato com a empresa por e-mail.
- Identificação de vagas publicadas nos últimos 7 dias.
- Armazenamento dos dados em banco SQLite.

## Tecnologias utilizadas

- **Node.js** – ambiente de execução JavaScript.
- **Express** – criação do servidor e gerenciamento de rotas.
- **Express Handlebars** – renderização das páginas.
- **Sequelize** – comunicação com o banco de dados.
- **SQLite** – armazenamento dos dados.
- **Bootstrap** – estilização e estrutura das páginas.
- **Nodemon** – reinicialização automática do servidor durante o desenvolvimento.

## Como executar o projeto

### Pré-requisitos

- Node.js instalado.
- npm instalado.

### 1. Clone o repositório

```bash
git clone https://github.com/Lazaro277/job-finder.git
```

### 2. Entre na pasta do projeto

```bash
cd job-finder
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor

```bash
npm run dev
```

### 5. Acesse a aplicação

Abra o navegador no endereço:

```text
http://localhost:3000
```

## Estrutura do projeto

```text
job-finder/
├── db/
│   ├── app.db
│   └── connection.js
├── models/
│   └── Job.js
├── public/
│   ├── css/
│   └── img/
├── routes/
│   └── jobs.js
├── views/
│   ├── layouts/
│   ├── add.handlebars
│   ├── index.handlebars
│   └── view.handlebars
├── app.js
├── package.json
└── package-lock.json
```

## Objetivo do projeto

O Job Finder foi desenvolvido como projeto de prática em desenvolvimento web, com o objetivo de aplicar conceitos de desenvolvimento backend, integração com banco de dados, criação de rotas, manipulação de formulários e renderização dinâmica de páginas.

## Licença

Este projeto está sob a licença MIT.

**Lázaro Messias**

- [GitHub](https://github.com/Lazaro277)
- [LinkedIn](https://www.linkedin.com/in/lazaro-messias/)
