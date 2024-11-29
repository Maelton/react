# Diferença entre `null` e `undefined`

Em JavaScript e TypeScript, `null` e `undefined` são tipos primitivos que indicam a ausência de valor, mas possuem diferenças importantes.

## `undefined`

- Representa a ausência de valor não inicializado. É o valor padrão de uma variável declarada mas não atribuída.

- É atribuído automaticamente pelo JavaScript em várias situações.

## `null`

- Representa a ausência intencional de um valor ou objeto.

- Deve ser atribuído explicitamente pelo programador para indicar que uma variável não tem um valor válido ou que um objeto não existe.


| Aspecto            | `undefined`                           | `null`                                |
|---------------------|---------------------------------------|---------------------------------------|
| **Tipo**           | `undefined`                          | `object`                              |
| **Atribuição**     | Automática pelo JavaScript            | Manual pelo programador               |
| **Semântica**      | "Não foi atribuído valor"             | "Ausência de valor intencional"       |
| **Comparação**     | Igual a `null` com `==`               | Igual a `undefined` com `==`          |

Use `undefined` para indicar que algo ainda não foi inicializado ou que não existe por padrão, e `null` para indicar explicitamente a ausência de valor quando necessário.