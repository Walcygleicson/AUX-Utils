import  "../internal/@interfaces.js";
import { ItemProperties } from "../internal/@interfaces.js";


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

///////////// BreakLoopFunction //////////////
/**
 * @typedef {(condition: number | boolean)=>void} BreakLoopFunction Função responsável por interromper um loop infinito de um método *`.loop()`*.
 */

/////////////// HandlerFunction ///////////
/**
 * @callback HandlerFunction Função *`callback`* manipuladora que recebe um parâmetro.
 * @param {ItemProperties} resObject
 * * Recebe um *`object`* do tipo *`ItemProperties`*.
 * ----
 * * *`ItemProperties`* objeto que fornece propriedades com informações sobre cada iteração realizada. O *`ItemProperties`* objeto é melhor aproveitado se desestruturado obtendo as propriedades `{item, i, root, get}` e, em certas ocasiões, pode receber um método `{stop()}`.
 * 
 * @callback HandlerFunction_stop Função *`callback`* manipuladora que recebe dois parâmetros.
 * @param {ItemProperties} resObject
 * * Recebe um *`object`* do tipo *`ItemProperties`*.
 * ----
 * * *`ItemProperties`* objeto que fornece propriedades com informações sobre cada iteração realizada. O *`ItemProperties`* objeto é melhor aproveitado se desestruturado obtendo as propriedades `{item, i, root, get}` e, em certas ocasiões, pode receber um método `{stop()}`.
 * @param {BreakLoopFunction} stop
 * * Função responsável por interromper um loop infinito de um método *`.loop()`*.
 * -----
 * **`param condition`**
 * *`(opcional)`*
 * * Pode receber um número, quando a quantidade de iterações for maior ou igual ao valor passado o *`loop`* é interrompido. Pode receber um *`boolean`* onde *`true`* executa a interrupção.
 * ----
 */
