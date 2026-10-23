# Nome do projeto: Kirrar DeathCount

# Resumo Geral

O projeto consiste em um programa simples para gerenciamento de jogos, saves e contagem de mortes, permitindo acompanhar o progresso individual de cada save e o total de mortes registradas.

# Problemática

Inicialmente, o projeto surgiu como uma sugestão de um amigo próximo, e o objetivo principal da produção engloba o estudo sobre HTML, CSS, e JAVASCRIPT.

# Tecnologias utilizadas

- HTML
- CSS
- JAVASCRIPT
- localStorage, para armazenamento de dados no navegador
- JSON, para exportação e importação de dados
- Editor de código: VSCode

# Como executar o projeto

Abra o arquivo `index.html` em um navegador.

# Funcionamento geral do projeto

## 1. Jogos

O usuário pode cadastrar e gerenciar diferentes jogos, cada um com um ID único para identificação.

As opções disponíveis incluem:

- Criar jogos
- Editar o nome dos jogos
- Excluir jogos, mediante confirmação
- Acessar os saves associados a cada jogo

## 2. Saves e contagem de mortes

Cada jogo pode possuir múltiplos saves, identificados individualmente.

Cada save possui:

- Nome
- Dificuldade
- Contador de mortes

O usuário pode:

- Criar, editar e excluir saves
- Aumentar ou diminuir a contagem de mortes
- Editar manualmente a quantidade de mortes registradas

O programa também apresenta o total de mortes, calculado a partir da soma dos contadores de todos os saves cadastrados.

## 3. Exportação e importação

Permite exportar e importar os dados dos jogos e seus respectivos saves.

> Exportação

- Gera um arquivo JSON contendo os dados cadastrados no programa.

> Importação

- Permite carregar dados a partir de um arquivo JSON.
- Verifica a estrutura dos dados importados, incluindo jogos, saves e seus respectivos campos.
- Rejeita arquivos com dados inválidos ou estrutura incompatível.
- Evita a duplicação de IDs durante a importação.

## 4. Exclusão e reinicialização dos dados

O usuário pode excluir jogos, saves ou reiniciar todos os dados da aplicação.

As ações de exclusão possuem uma tela de confirmação para evitar operações acidentais.

# Persistência de dados

Os dados dos jogos, saves, contadores de mortes e identificadores são armazenados no `localStorage` do navegador.

Para evitar a perda dos dados caso o armazenamento do navegador seja apagado, recomenda-se realizar exportações periódicas dos arquivos JSON.

# Limitações conhecidas

- Os dados ficam armazenados localmente no navegador, sem sincronização automática entre dispositivos.
- A perda dos dados armazenados no navegador pode exigir a recuperação por meio de um arquivo JSON exportado anteriormente.
- O programa depende do navegador para executar e armazenar seus dados.
