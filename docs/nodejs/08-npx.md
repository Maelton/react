# npx (Node Package eXecute)

O `npx` é uma ferramenta que vem junto com o Node.js e o `npm` (Node Package Manager), a partir da versão 5.2.0 do `npm`. Ele facilita a execução de pacotes Node.js sem precisar instalá-los globalmente no seu sistema.

Ele é um simples executor de pacotes NPM. Permite que desenvolvedores executem qualquer pacote JavaScript - o pacote create-react-app por exemplo - disponível no registro NPM sem mesmo ter que instalar o pacote localmente. 

Ele permite que binários dentro do projeto ou pacotes do **NPM registry** sejam executados.

Essa funcionalidade do `npx` resolveu o impasse existente anteriormente com o uso único do `npm` de ter que instalar os pacotes localmente para poder executá-los com o `npm run`.

# Diferença do `npm` e do `npx`

O `npm` serve para você gerenciar os pacotes, instalando localmente, globalmente ou removendo-os, o `npx` serve para você executar sem instalar.

Quando você instala pacotes com o `npm`, há dois lugares principais onde o pacote é armazenado: a pasta `node_modules` e o cache do npm. O npm mantém um cache local para melhorar a performance nas instalações subsequentes. Esse cache armazena cópias dos pacotes baixados do repositório npm, para que o `npm` não precise baixá-los novamente toda vez que você os instalar.

O `npx` funciona de maneira um pouco diferente. Quando você executa um comando com o `npx`, ele verifica se o pacote está instalado localmente no seu projeto (na pasta `node_modules`). Se o pacote não estiver lá, ele tenta baixá-lo diretamente do npm (ou de uma versão específica, se indicada). O pacote é temporariamente baixado e executado, mas não é instalado permanentemente na pasta `node_modules` (a menos que você execute `npm install` explicitamente).

### Exemplo de uso:

    Quando você instala react-native em sua máquina e começa um projeto usando ele ao invés de NPX, você está usando a versão do react-native do pacote instalado em seu node_modules, já quando usa npx você usa um pacote na nuvem do node, então isso te da liberdade para usar até outras versões que não tem em sua máquina.

# Referências

- [Conhecendo o NPX o package runner do NPM](https://youtu.be/gjL3wTJqcGI?si=3fEuhLZshhFuzUkL)