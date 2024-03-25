
import { __ as _ } from "../internal/@utils.js";


//############## STR ##################
/**
 * ***`AUX.Utils`***
 * 
 * ------
 * * Objeto provém de métodos que manipulam *`strings`*.
 * > 
 */
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

////////// .capitalize /////////////
/**
 * * Capitaliza o primeiro caractere (`ignorando caracteres de espaço`) de uma *`string`*.
 * ----
 * @param {string} value
 * * Uma *`string`* a ser capitalizado.
 * ----
 * @example
 * .capitalize("hello world") => "Hello world"
 * .capitalize("   hey") => "   Hey"
 * @returns {string}
 */
str.capitalize = function(value) {
    return value.replace(/\w\S*/, (word) => {
        return word.charAt(0).toUpperCase() + word.substring(1);
    });
}

/////////////// .titleize //////////
/**
 * * Retorna uma dada *`string`* convertida em *`Title Case`* onde cada primeira letra de uma palavra é transformada em maiúscula.
 * -----
 * @param {string} value
 * * Uma *`string`* a ser convertida.
 * ----
 * @example
 * .titleize("hello world") => "Hello World"
 * @returns {string}
 */
str.titleize = function (value) {
    return value.replace(/\w\S*/g, (word) => {
        return word.charAt(0).toUpperCase() + word.substring(1);
    });
}

///////////// .has /////////////
/**
 * * Testa se uma *`string`* possui pelo menos um (ou todos) dos caracteres passados em *`chars`* (uma *`string`* de caracteres para a pesquisa) e retorna um *`boolean`*.
 * * Para testar se possui **todos** os caracteres, definir *`true`* no terceiro parâmetro. Senão retorna um resultado na primeira ocorrência encontrada.
 * -----
 * @param {string} value
 * * Uma *`string`* a ser avaliada.
 * -----
 * @param {string} chars
 * * Uma *`string`* contendo os caracteres que serão buscados. Se pelo menos um caractere for econtrado retorna *`true`* de imediato.
 * ----
 * @param {boolean} all
 * *`(opcional)`*
 * * Se *`true`*, testa se uma *`string`* possui todos os caracteres passados em *`chars`*. Se for omitido o padrão é *`false`*.
 * ----
 * @example
 * const text = "*hello-world!*"
 * 
 * .has(text, "-#%") => true // Contém "-"
 * .has(text, "#%") => false // Não contém nenhum
 * 
 * .has(text, "-#%", true) => false // Não contém todos
 * .has(text, "-!*", true) => true // Contém todos
 * @returns {boolean}
 */
str.has = function (value, chars, all = false) {
    chars = [...chars]
    for (let i = 0; i < chars.length; i++) {
        if (all) {
            if (!value.includes(chars[i])) { return false }
        } else {
            if (value.includes(chars[i])) { return true }
        }
    }

    return all 
}


/////////////// .toCorrect //////////// colocar letras miusculas apos pontos e insere pontos finais, retirar espaços duplos.

///////////// .toCamel /////////
/**
 * * Converte uma *`string`* para *`camelCase`* caso esteja especificamente em *`snake_case`*, *`kebab-case`* ou *`PascalCase`*, ou separada por espaço. Qualquer outro tipo de escrita pode retornar resultados inesperados.
 * ----
 * @param {string} value
 * * Uma *`string`* a ser convertida.
 * ------
 * @example
 * .toCamel("hello-world") => "helloWorld"
 * .toCamel("hello_world") => "helloWorld"
 * .toCamel("HelloWorld") => "helloWorld"
 * .toCamel("hello world") => "helloWorld"
 * @returns {string}
 */
str.toCamel = function (value) {
    value = value.replace(/(\s+)|(_+)|(-+)/g, " ");
    value = value.trim();
    return value
        .replace(/[ ](\w)/g, ($, letter) => {
            return letter.toUpperCase();
        })
        .replace(/\w\S*/, (word) => {
            return word.charAt(0).toLowerCase() + word.substring(1);
        });
};


/////////// .toSnake ///////////
/**
 * * Converte uma *`string`* para *`snake_case`* caso esteja especificamente em *`camelCase`*, *`kebab-case`* ou *`PascalCase`*, ou separada por espaço. Qualquer outro tipo de escrita pode retornar resultados inesperados.
 * ----
 * @param {string} value
 * * Uma *`string`* a ser convertida.
 * ------
 * @example
 * .toSnake("hello-world") => "hello_world"
 * .toSnake("HelloWorld") => "hello_world"
 * .toSnake("hello world") => "hello_world"
 * @returns {string}
 */
str.toSnake = function (value) {
    value = value.replace(/(\s+)|(_+)|(-+)/g, " ");
    value = value.trim();
    return value.replace(/([a-z]|[áàâãäéèêëíìîïóòôõöúùûüçñ])([A-Z]|[ÁÀÂÃÄÉÈÊËÍÌÎÏÓÒÔÕÖÚÙÛÜÇÑ])/g,"$1_$2").toLowerCase().replace(/[ ]/g, "_");  
}

////////// .toKebabCase ////////////
/**
 * * Converte uma *`string`* para *`kebab-case`* caso esteja especificamente em *`camelCase`*, *`snake_case`* ou *`PascalCase`*, ou separada por espaço. Qualquer outro tipo de escrita pode retornar resultados inesperados.
 * ----
 * @param {string} value
 * * Uma *`string`* a ser convertida.
 * ------
 * @example
 * .toKebab("hello_world") => "hello-world"
 * .toKebab("HelloWorld") => "hello-world"
 * .toKebab("hello world") => "hello-world"
 * @returns {string}
 */
str.toKebab = function (value) {
    value = value.replace(/(\s+)|(_+)|(-+)/g, " ");
    value = value.trim()
    return value.replace(/([a-z]|[áàâãäéèêëíìîïóòôõöúùûüçñ])([A-Z]|[ÁÀÂÃÄÉÈÊËÍÌÎÏÓÒÔÕÖÚÙÛÜÇÑ])/g,"$1_$2").toLowerCase().replace(/[ ]/g, "-");
}

////////// .toPascalCase /////////
/**
 * * Converte uma *`string`* para *`PascalCase`* caso esteja especificamente em *`camelCase`*, *`snake_case`* ou *`kebab-case`*, ou separada por espaço. Qualquer outro tipo de escrita pode retornar resultados inesperados.
 * ----
 * @param {string} value
 * * Uma *`string`* a ser convertida.
 * ------
 * @example
 * .toPascal("hello_world") => "HelloWorld"
 * .toPascal("hello-world") => "HelloWorld"
 * .toPascal("helloWorld") => "HelloWorld"
 * .toPascal("hello world") => "HelloWorld"
 * @returns {string}
 */
str.toPascal = function (value) {
    value = value.replace(/(\s+)|(_+)|(-+)/g, " ");
    value = value.trim()
    return value
        .replace(/[ ](\w)/g, ($, letter) => {
            return letter.toUpperCase();
        })
        .replace(/\w\S*/, (word) => {
            return word.charAt(0).toUpperCase() + word.substring(1);
        });

}

                

export {str as __}