# Rota Grama Alta

![Logo Rota Grama Alta](media/img/logo_grande.png)

Projeto desenvolvido para a disciplina de **Frontend I** do **IFSC Campus São José**, pelas alunas **[Ana Luiza Lima](https://github.com/ana-luiza-lima)** e **[Gabriele Bueno](https://github.com/GabrieleBuenoA)**.

A proposta foi criar uma **loja virtual fictícia no universo Pokémon**, com foco em cadastro de clientes, autenticação, carrinho, compras e relatórios administrativos usando apenas HTML, CSS e JavaScript.

## Conceito

A **Rota Grama Alta** simula um centro de captura e venda de Pokémon, onde treinadores podem se cadastrar, fazer login, escolher Pokémon, montar carrinho e finalizar compras.

## Paleta de cores principal

- `#1B5E20` (verde grama)
- `#228B22` (verde folha)
- `#558B2F` (verde musgo)
- `#E8F5E9` (fundo claro)

## Funcionalidades implementadas

### Cliente
- Cadastro com **nome, e-mail, CPF e senha**
- Geração automática de ID de cliente no formato **C001, C002...**
- Login com validação por e-mail e senha
- Sessão de usuário com `localStorage`
- Página de conta com dados do cliente e edição (exceto ID)
- Logout

### Loja e compras
- Catálogo com Pokémon (imagem, tipos, atributos e preço)
- Filtro de Pokémon por **nome** e **tipo**
- Captura/adicionar ao carrinho
- Alteração de quantidade e remoção de itens do carrinho
- Finalização de compra para usuário autenticado
- Registro da compra com:
  - ID da compra no formato **CP001, CP002...**
  - cliente associado
  - data
  - itens/produtos
  - quantidade
  - valor total
- Histórico de compras na conta
- Modal com detalhes completos dos Pokémon comprados

### Administração
- Login de administrador com credenciais fixas
- Página exclusiva de relatórios
- Relatório de clientes cadastrados
- Busca de clientes por **nome, ID, e-mail ou CPF**
- Busca de compras por **ID, cliente, data, valor ou produto**

## Estrutura principal de páginas

- `index.html` — página inicial e catálogo
- `cadastro.html` — cadastro de cliente
- `login.html` — autenticação
- `carrinho.html` — carrinho/finalização
- `conta.html` — dados do cliente e histórico
- `relatorio.html` — área administrativa
- `sobre.html` — descrição do projeto, equipe e contato

## Tecnologias

- HTML5
- CSS3
- JavaScript 
- `localStorage` para persistência de dados no navegador

## Como executar

1. Clone este repositório.
2. Abra a pasta do projeto.
3. Execute abrindo o arquivo `index.html` no navegador.

> Não há dependências externas ou etapa de build.

## Credenciais de teste

### Administrador
- **E-mail:** `admin@ifsc.com`
- **Senha:** `admin`

### Cliente
- Cadastre um novo cliente na página `cadastro.html` para testar o fluxo completo de compra.

## Fluxo rápido de uso

1. Acesse `index.html` e escolha um Pokémon.
2. Faça cadastro/login para autenticar.
3. Adicione itens no carrinho e finalize a compra.
4. Consulte o histórico em `conta.html`.
5. Faça login de administrador para ver os relatórios em `relatorio.html`.


## Licença

Projeto para fins **acadêmicos/educacionais**, desenvolvido para a disciplina de Frontend I do IFSC São José.