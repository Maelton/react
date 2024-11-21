# Promise

Uma Promise é um **objeto** que representa a eventual conclusão ou falha de uma operação assíncrona.

Objetos Promise geralmente são retornados por funções assíncronas. Esse é um dos usos principais das Promises no JavaScript: encapsular operações assíncronas e seus resultados, permitindo que o código gerencie essas operações de maneira mais clara e organizada.

A Promise é criada usando o construtor Promise, que recebe uma função executora como argumento. Essa função executora tem dois parâmetros: resolve e reject.

```
let minhaPromise = new Promise((resolve, reject) => {})
```

Os argumentos `resolve` e `reject` são funções callback.

**Descrição breve da documentação:** `A callback used to initialize the promise. This callback is passed two arguments: a resolve callback used to resolve the promise with a value or the result of another promise, and a reject callback used to reject the promise with a provided reason or error.`

## Estados da Promise

Uma Promise possui três estados: `pending`, `fulfilled` e `rejected`.

# Referências

- [Desvendando DEFINITIVAMENTE as Promises em JavaScript // Mão no Código #21](https://youtu.be/nRJhc6vXyK4?si=IcKptcu-I_KZnL-w)

- [JavaScript Visualized - Promise Execution](https://youtu.be/Xs1EMmBLpn4?si=hot4L844ONR4szHs)