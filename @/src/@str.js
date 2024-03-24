
import { __ as _ } from "../internal/@utils.js";
//############## STR ##################
const str = {}


////////////// .is ////////////
/**
 * * Testa se o valor fornecido é do tipo *`string`* e retorna um *`boolean`*.
 * ------
 * @param {*} value
 * * Um valor a ser testado.
 * -----
 * @example
 * .is("123") => true
 * .is(123) => false
 * @returns {boolean}
 */
str.is = function (value) {
    return Object.prototype.toString.call(value).slice(8, -1) == "String";
}

////////// .isUpper ///////////
/**
 * * Testa se uma *`string`* está inteiramente em letras maísculas e retorna um *`boolean`*.
 * ---
 * @param {string} value
 * * Uma string a ser testada.
 * ---
 * @example
 * .isUpper("hello") => false
 * .isUpper("HELLO") => true
 * .isUpper("Hello") => false 
 * @returns {boolean}
 */
str.isUpper = function (value) {
    return value === value.toUpperCase()
}

//////////// .isLower ///////////
/**
 * * Testa se uma *`string`* está inteiramente em letras minúsculas e retorna um *`boolean`*.
 * ---
 * @param {string} value
 * * Uma string a ser testada.
 * ---
 * @example
 * .isLower("hello") => true
 * .isLower("HELLO") => fasle
 * .isLower("Hello") => false 
 * @returns {boolean}
 */
str.isLower = function (value) {
    return value === value.toLowerCase()
}

////////// .hasUpper ///////////
/**
 * * Testa se uma *`string`* possui pelo menos um caractere alfabético maísculo e retorna um *`boolean`*.
 * ---
 * @param {string} value
 * * Uma string a ser testada.
 * ---
 * @example
 * .hasUpper("Hello") => true
 * .hasUpper("hello") => false
 * @returns {boolean}
 */
str.hasUpper = function (value) {
    for (let char of value) {
        if (char === char.toUpperCase() && char.toLowerCase() !== char.toUpperCase()) {
            return true
        }
    }

    return false
    
}

////////// .hasLower //////////////
/**
 * * Testa se uma *`string`* possui pelo menos um caractere alfabético minúsculo e retorna um *`boolean`*.
 * ---
 * @param {string} value
 * * Uma string a ser testada.
 * ---
 * @example
 * .hasLower("heLLO") => true
 * .hasLower("HELLO") => false
 * @returns {boolean}
 */
str.hasLower = function (value) {
    for (let char of value) {
        if (char === char.toLowerCase() && char.toLowerCase() !== char.toUpperCase()){
            return true;
        }
    }

    return false;
}

///////// .isAlphabetic /////////////
/**
 * * Testa se uma *`string`* é composta somente por caracteres alfabéticos (`exeção para letras acentuadas e "ç"`) e retorna um *`boolean`*.
 * ----
 * @param {string} value
 * * Uma *`string`* a ser testada.
 * ----
 * @example
 * .isAlphabetic("hello") => true
 * .isAlphabetic("hello123") => false
 * .isAlphabetic("Áôóç") => true
 */
str.isAlphabetic = function (value) {
    value = value.toLowerCase();
    if (value.length <= 1) {
        return value !== value.toUpperCase(); 
    } else {
        value = value.split("")
        for (let char of value) {
            if (char === char.toUpperCase()) {
                return false
            }
        }

        return true
    }
}


  

const __ = str
                

export {__}