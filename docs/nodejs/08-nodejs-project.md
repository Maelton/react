# Projeto Node.js

Um projeto Node.js é um aplicativo ou serviço construído com o Node.js, que é uma plataforma de execução de código JavaScript do lado do servidor. Ele permite que os desenvolvedores criem aplicações escaláveis, rápidas e eficientes, utilizando a linguagem JavaScript fora do navegador.

## Como criar um projeto Node.js

Dentro do diretório desejado para o seu projeto execute o comando: `npm init -y`

Use `npm -help` para obter mais informações de todos os comandos possíveis para uso dentro de um projeto **Node.js**.

## Estrutura comum de um projeto Node.js

```
my-nodejs-project/
├── node_modules/       # Dependências do projeto
├── public/             # Arquivos estáticos (HTML, CSS, JS do cliente)
├── src/                # Código fonte
│   ├── app.js          # Lógica principal da aplicação
│   ├── routes/         # Rotas para diferentes endpoints
│   └── controllers/    # Controladores das rotas
├── package.json        # Configuração do projeto e lista de dependências
├── .env                # Variáveis de ambiente
└── README.md           # Documentação do projeto
```

## Diferença entre o `package.json` e o `package-lock.json`

### `package.json`

O `package.json` é o arquivo principal de configuração de um projeto **Node.js**. Ele contém as informações essenciais sobre o projeto, como nome, versão, scripts, dependências, entre outras. Esse arquivo é gerado automaticamente quando você inicializa um projeto com o comando `npm init`.

#### Principais funções:

- **Informações do projeto**: Contém o nome, versão, descrição, autor, licença e outras informações básicas.

- **Dependências**: Define as dependências do projeto, ou seja, os pacotes que seu projeto precisa para funcionar.
    - `dependencies`: Pacotes necessários para o funcionamento do seu aplicativo em produção.
    - `devDependencies`: Pacotes necessários apenas para o desenvolvimento, como ferramentas de testes ou bundlers.

- **Scripts**: Define scripts úteis para automação de tarefas, como npm start, npm test, etc.

- **Versões**: Define a versão das dependências de maneira flexível (com ou sem versões específicas, usando intervalos ou identificadores como `^` ou `~`).

### package-lock.json

O package-lock.json é criado automaticamente pelo npm sempre que você instala ou atualiza dependências com o comando npm install. Ele registra as versões exatas dos pacotes que estão sendo usados no projeto, incluindo as dependências das dependências (subdependências), garantindo que o mesmo conjunto de pacotes seja instalado em qualquer ambiente ou por qualquer desenvolvedor, proporcionando consistência entre as instalações.

#### Principais funções:

- **Versões exatas**: Registra as versões exatas das dependências (incluindo as subdependências), ao contrário do package.json, onde você pode especificar versões com intervalos.

- **Segurança e estabilidade**: Garantia de que todas as pessoas que trabalham no projeto (ou qualquer máquina que execute o projeto) tenham exatamente as mesmas versões das dependências, prevenindo problemas de compatibilidade.

- **Performance**: Melhora a performance de instalações futuras, pois o npm pode usar o package-lock.json para otimizar a instalação de pacotes.

## Armazenamento de dependências no Node.js

O armazenamento de dependências no Node.js funciona por meio de uma estrutura padronizada e altamente otimizada, gerenciada pelo npm (Node Package Manager) ou outras ferramentas como Yarn ou pnpm.

Quando você instala dependências usando `npm install`, elas são armazenadas no diretório `node_modules` do projeto.

O npm mantém um cache local para melhorar a performance nas instalações subsequentes. Esse cache armazena cópias dos pacotes baixados do repositório npm, para que o npm não precise baixá-los novamente toda vez que você os instalar.

Quando você instala pacotes com o npm, há dois lugares principais onde o pacote é armazenado: a pasta `node_modules` e o **cache do npm**.

Se você deseja instalar um pacote com o npm mas não quer que ele seja salvo no cache local, você pode usar a flag --no-cache ao executar o comando de instalação. Essa flag impede que o npm armazene o pacote no cache, forçando-o a baixar o pacote diretamente do repositório do npm.

```
npm install <pacote> --no-cache
```

### Tipos de dependências

#### 1 Dependências principais (`dependencies`)

- São necessárias para o funcionamento do projeto em **produção**.

- Declaradas em `package.json` na seção `dependencies`.

#### 2 Dependências de desenvolvimento (`devDependencies`)

- São usadas apenas no ambiente de desenvolvimento, como ferramentas de teste, bundlers, ou linters.

- Declaradas em `package.json` na seção `devDependencies`.

### Dependências e instalações

#### Instalando dependências do projeto

- `npm install <nome-da-dependencia>` para instalar dependências de produção.

- `npm install <nome-da-dependencia> --save-dev` para instalar as dependências de desenvolvimento.

#### Ao instalar as dependências a partir do `package.json`

- `npm install` para instalar tudo (**prod** e **dev**).

- `npm install --production` para instalar apenas as **dependências principais**.

#### Instalar dependências globalmente

- `npm install -g <nome-da-dependencia>`

#### Não salvar dependência no `package.json`

Se você quiser instalar uma dependência sem que ela seja adicionada automaticamente ao package.json, o que é bastante útil para testes ou para dependências temporárias use:

- `npm install <nome-da-dependencia> --no-save`
