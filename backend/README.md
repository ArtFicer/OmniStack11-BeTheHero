# Be The Hero - Aplicação da 11ª Semana Omnistack


## Conteúdo Teórico

### Métodos HTTP:

*GET*: Buscar/Listar uma informação do back-end.

*POST*: Criar uma informação no back-end.

*PUT*: Alterar uma informação no back-end.

*Delete*: Deletar uma informação no back-end.
<br><br>

### Tipos de Parâmetros

#### Query:
**Query Params**: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação). Ex: www.exp.com/users?page=2&name=Pedro , nesse caso nosso servidor receberá 2 parâmetros acessíveis, "page" com valor 2 e "name" com valor 'Pedro'.

**Rote Params**: Parâmetros utilizados para identificar recursos. Ex: www.exp.com/users/:id , nesse exemplo, qualquer valor passado depois de 'users/' será vo valor de 'id'. Em um requisição www.exp;com/users/2 o 'id' valerá 2 (id=2). O interessante que este método te permite usar 'combos' de rotas. Ex: www.exp.com/users/:id/homepage. Nesse caso, em uma aplicação fictícia, irá retornar a página do usuário com o 'id' solicitado.

**Request Body**: O corpo da requisição, é utilizado para criar ou alterar recursos. Atualmente é muito comum o uso de JSON como o formato padrão do body da requisição.

<br><br>

### Banco de dados
#### Tipos de Bancos de dados
Os tipos mais comuns de banco de dados são relacionais e não relacionais. 

**Relacionais**: Os bancos de dados relacionais são bancos onde há uma "relação" entre as entidades de uma banco. Nesses modelos de banco, são comumente utilizados os bancos de modelo *SQL*, como MySQL, SQLite, PostgreSQL, Oracle, Mircrosoft SQL Server, etc.

**Não relacionais**: Os bancos de dados não relacionais em forma geral, são bancos onde não é uma relação obrigatória entre as entidades. Cada entidade é autosuficiênte por si própria. Não impede que haja uma relação entre entidades, mas não é o foco deste tipo de banco. De forma geral, os modelos comunmente utilizados são os *NoSQL*, como  MongoDB, CouchDB, etc.

#### Modelos de interação

**Driver**: Este é o modelo mais convencional, onde inserimos "query"s de interação com o banco. Este modelo é o modelo mais comum, e é ele que é geralmente utilizado quando estamos acessando nosso banco diretamente. Nele utilizamos verbos do próprio banco seguindo sua sintaxe própria. Ex: SELECT * FROM users (retorna todos os dados da tabela 'users')

**Query Builder**: Neste modelo utilizamos de querys em nosso código para que fique vizualmente mais simples de se compreender e realizar a requisição, sem ter que ficar aprendendo todos os verbos do banco de dado que se está utilzando. Nele fazemos algo parecido como chamar métodos de classes. Ex: table('users').select('*').where() (retorna todos os dados da tablea 'users'). É necessário um "middleware" interpretador, como o knex


### Comandos do banco de dados SQLite
Necessário: *npm i sqlite3 knex*
* Criando arquivo de configuração: *npx knex init* ;
* Editar o arquivo de configuração;
* Criando o arquivo que cria uma entidade: *npx knex migrate:make nome_da_tabela*
* Edite os campos do arquivo gerado da tabela;
* Gerando a tabela no banco: *npx knex migrate:latest*
* Vendo o status dos arquivos de criação: *npx knex migrate:status*