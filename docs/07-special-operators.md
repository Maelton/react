# Optional Chaining Operator (`?.`)

Usado para acessar propriedades de objetos de forma segura, verificando se a propriedade ou objeto acessado não é null ou undefined antes de tentar acessá-la.

## Exemplo `inputRef.current?.value`

`current?.value` verifica primeiro se `content.current` é diferente de `null` ou `undefined`. 

- 1. **Se for**, acessa a propriedade `value`. 

- 2. **Caso contrário**, retorna `undefined` sem lançar erro.

O operador `?.` torna o código mais conciso e seguro, especialmente em cenários onde propriedades ou valores podem não existir.

# Non-null Assertion Operator (`!`)

Em TypeScript, o `!` tem uma funcionalidade específica chamada de operador de asserção não nula (non-null assertion operator).

O operador `!` é usado para afirmar ao TypeScript que um valor não é nulo (`null`) nem indefinido (`undefined`), mesmo que o compilador não tenha certeza disso. Ele é útil quando você tem certeza de que o valor estará disponível em tempo de execução, mas o **TypeScript** não consegue inferir isso.

# Diferença entre `?.` e `!`

## ?. (Encadeamento Opcional):

Verifica se a propriedade ou valor é `null` ou `undefined` antes de tentar acessá-lo.

Caso o valor seja `null` ou `undefined`, o resultado será `undefined` e não causará um erro.

```
let obj: { value?: string } = {};
console.log(obj.value?.toUpperCase()); // undefined
```

## ! (Asserção Não Nula):

Força o TypeScript a tratar o valor como não nulo.

Se você usar `!` em algo que realmente seja `null` ou `undefined` em tempo de execução, um erro será lançado.

```
let obj: { value?: string | null } = { value: "hello" };
console.log(obj.value!.toUpperCase()); // "HELLO"

// Caso obj.value seja null:
obj.value = null;
console.log(obj.value!.toUpperCase()); // Erro em tempo de execução
```