import { __ as _ } from "../internal/@utils.js";
//########### NUM #####################
const num = {}

///////// .countDecimal ////////////
/**
 * * Retorna a quantidade de números decimais que existem em um valor do tipo *`float`*.
 * ---
 * @param {number | string} value
 * * Um número de ponto flutuante que será verificado.
 * -----
 */
num.countDecimal = function (value) {
    value = value.toString();
    var decimalPart = value.split(".");
    if (!decimalPart[1]) return 1;
    return decimalPart[1].length || 1;
}

///////////// is ///////////////////
/**
 * * Verifica se o tipo do valor passado é um *`Number`* (com base em seu *`constructor`*) e retorna um *`boolean`*. Nota: Um número em formato *`string`* retorna *`false`*. Para verificar se o valor contido é numérico usar *`num.isNumeric()`*.
 * ---
 * @param {*} value
 * * Um valor a ser analisado.
 * ---
 * @example
 * .is(2) => true
 * .is("2") => false
 */
num.is = function (value) {
    return Object.prototype.toString.call(value).slice(8, -1) == 'Number';
}

/////////// .isNumeric //////////////
/**
 * * Verifica se um valor contido em uma string é numérico e retorna um *`boolean`*.
 * ----
 * @param {*} value
 * * Um valor a ser analisado.
 * ----
 * @example
 * .isNumeric("2") => true
 * .isNumeric("1.50") => true
 * .isNumeric("texto") => false
 * .isNumeric("-2") => true
 */
num.isNumeric = function (value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

/////////////// .octal //////////////
/**
 * * Retorna o número octal de um dado valor numérico (`tanto positivo quanto negativo`). Ou seja, preenche um valor menor que `10` e maior que `-10` com um `0` à esquerda. O tipo retornado é sempre uma *`string`*.
 * ----
 * @param {string | number} value
 * * Uma valor númerico a ser convertido.
 * ----
 * @example
 * .octal(1) => "01"
 * .octal("9") => "09"
 * .octal(0) => "00"
 * .octal(-5) => "-05"
 * 
 * @returns {string}
 */
num.octal = function (value) {
    _.type(value) == 'number' ? value = String(value) : null
    
    if (value >= 0) {
        value = value.padStart(2, 0)
    } else {
        value = "-" + value.replace("-", "").padStart(2,0)
    }
    return value
}

//////////// .isInt ////////////
/**
 * * Verifica se um valor numérico é *`inteiro`* ou *`decimal`* e retorna uma string representando o tipo: *`"int"`* para inteiro e *`"float"`* para decimal. Qualquer outro tipo de valor retona *`null`*.
 * ----
 * @param {number | string} value
 * * Uma valor numérico (*`number`* ou *`string`*) para ser avaliado.
 * ----
 * @example
 * .type(10) => "int"
 * .type(1.5) => "float"
 * .type("3.14") => "float"
 * .type("text") => null
 * @returns {"int" | "float" | null}
 */
num.type = function (value) {
    if (!["number", "string"].includes(_.type(value)) || !Number(value)) {
        return null
    }else if (value % 1 === 0) {
       return "int"
   } else {
       return "float"
   }
}

////////// .toBinary ///////////
/**
 * * Coverte um valor numérico *`inteiro`* para *`binário`* e o retorna. Se o valor fornecido não corresponde a um número o retorno é *`null`*.
 * -----
 * @param {number | string} value
 * * Um valor numérico para ser convertido.
 * -----
 * @example
 * .toBinary(5) => "101"
 * .toBinary("5") => "101"
 * .toBinary("5x") => null
 * @returns  {string | null}
 */
num.toBinary = function (value) {
    if(!Number(value)){return null}
    return (value >>> 0).toString(2)
}

///////////// .isEven ////////////
/**
 * * Testa se um valor numérico é *`par`* e retorna um *`boolean`*. Se o valor for *`ímpar`* o retorno é *`false`*. Se for passado um valor não numérico o retorno é *`null`*.
 * ----
 * @param {number | string} value
 * * Um valor numérico para ser analisado.
 * ----
 * @example
 * .isEven(1) => false
 * .isEven(2) => true
 * .isEven("2") => true
 * .isEven(-2) => true
 * .isEven("3xx") => null
 * @returns {boolean | null}
 */
num.isEven = function (value) {
    value = parseInt(Number(value)) % 2
    if (value === 0 || value === -0) {
        return true
    } else if (value === 1 || value === -1) {
        return false
    } else {return null}
}

////////////// .factorial //////////////
/**
 * * Retorna o resultado fatorial de um valor numérico natural. Se um valor não numérico ou não natural for passado o retorno é *`null`*.
 * -----
 * @param {number | string} value
 * * Um valor numérico natural para fatorar.
 * -----
 * @example
 * .factorial(4) => 24
 * .factorial("4") => 24
 * .factorial(-2) => null
 * .factorial(5.6) => null
 * .factorial("3xx") => null
 * @returns {number | null} 
 */
num.factorial = function (value) {
    if (!Number.isInteger(Number(value)) || value < 0) {
        return null
    } else if (value == 0 || value == 1) {
        return 1;
    } else {
        return Number(value * this.factorial(value - 1));
    }
}


/**
 * ***`AUX.Utils`***
 * 
 * ------
 * * Objeto provém de métodos que trabalham com valores numéricos.
 * > 
 */
const __ = num

export {__}