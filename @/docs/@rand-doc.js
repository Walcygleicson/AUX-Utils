/////////////// GeneratorOptions //////////////////////////
/**
 * @typedef {object} GeneratorOptions
 * @property {CaseKeyWords} [case] Recebe uma palavra-chave que define letra maíscula ou minúscula. Só funciona com **`type:`** definido como *`"letter"`*, *`"password"`*, *`"key"`* ou *`"random"`*.
 * @property {string} [chars] Uma string contendo outros caracteres especiais para fazerem parte da sequência gerada. Ex: *`"@#*&"`*. Só funciona com **`type:`** definido como *`"letter"`*, *`"password"`*, ou *`"random"`*.
 * @property {string} [sep] Um caractere que separa a sequência. Deve ser definido um **`sepRange:`**.  Só funciona com **`type:`** definido como *`"letter"`*, *`"password"`*, *`"digits"`* ou *`"random"`*.
 * @property {number} [sepRange] Um número que define após quantos caracteres inserir um carctere de separação. Só funciona com **`sep:`** defindio.
 * @property {"digit" | "letter" | "random" | "cell" | "date" | "hour" | "cpf" | "password"} [type] Uma palavra-chave que define o tipo de sequência gerada.
 * @property {number} [length] O tamanho da string de sequência de caracteres gerada. A quantidade definida não inclui separadores definidos em **`sep:`**.
 */

//////////////// CaseKeyWords //////////////
/**
 * @typedef {"upper" | "lower"} CaseKeyWords
 */