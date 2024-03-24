import { __ as _ } from "./@utils.js";
import { num, str } from "../../module/aux-utils.js";


/**
 * * Fornece propriedades com informações sobre o *`item`* manipulado.

 */
export class ItemProperties{
    constructor({ item, i, root, fn, result }) {
        /** * Obtém o índice da iteração atual. @type {number}*/
        this.i = i

        /** * Obtém o item atual. */
        this.item = item || null

        /** * Fornece propriedades de informações sobre o *`item`* atual. */
        this.get = new ItemGetters({item, root, i})

        /** Obtém o objeto original do *`item`*, se houver, caso contrário o valor é *`null`*. */
        this.root = root || null

        this.result = result? Object.freeze({
            total: result,
            item: result[result.length - 1] || null,
            length: result.length,
            get: new ItemGetters({ item:result[result.length - 1] || null, i:i - 1, root:result })
        }) : null
       
    }

}



class ItemGetters{
    constructor({ item, root, i}) {
        /** * Obtém o tipo de *`item`*. @type {string}*/
        this.type = _.type(item);
        /** * Obtém o tamanho de *`item`*, se possuir a propriedade *`.length`*, caso contrário o valor é *`null`*. @type {number | null}*/
        this.length =
            item !== undefined && item !== null ? item.length || null : null;
        /** * Obtém o *`item`* anterior ao atual, caso não haja o valor é *`null`*. */
        this.prev = root ? root[i - 1] || null : null;
        /** * Obtém o tipo do *`item`* anterior ao atual, caso não haja o valor é *`null`*. @type {string}*/
        this.prevType = this.prev ? _.type(root[i - 1]) : null;
        /** * Obtém o *`item`* posterior ao atual, caso não haja o valor é *`null`*. */
        this.next = root ? root[i + 1] || null : null;
        /** * Obtém o tipo do *`item`* posterior ao atual, caso não haja o valor é *`null`*. @type {string}*/
        this.nextType = this.next ? _.type(root[i + 1]) : null;
        /** * Se *`item`* for uma *`string`* obtém um *`array`* com os caracteres separados, caso contrário o valor é *`null`*. @type {Array | null} */
        this.split = _.type(item) == "string" ? item.split("") : null;
        /** * Se *`item`* for uma *`object`* obtém um *`array`* com as *`keys`* (chave de propriedade), caso contrário o valor é *`null`*. @type {Array | null} */
        this.keys = _.type(item) == "object" ? Object.keys(item) : null;
        /** * Se *`item`* for uma *`object`* obtém um *`array`* com os valores das propriedades, caso contrário o valor é *`null`*. @type {Array | null} */
        this.values = _.type(item) == "object" ? Object.values(item) : null;
        /** * Se *`item`* for uma *`array`* obtém os valores unidos em uma *`string`*, caso contrário o valor é *`null`*. @type {string | null} */
        this.join = _.type(item) == "array" ? item.join("") : null;
        /** * Se *`item`* for uma *`object ou array`* obtém-o convertido em um *`JSON`*, caso contrário o valor é *`null`*. @type {string | null} */
        this.json =
            _.type(item) == "object" || _.type(item) == "array"
                ? JSON.stringify(item)
                : null;
        /** * Indica se *`item`* é um numérico. */
        this.isNumeric = !isNaN(parseFloat(item)) && isFinite(item);
        /** * Indica se *`item`* é um inteiro. */
        this.isInt = Number.isInteger(Number(item));
        /** * Indica se *`item`* é par. */
        this.isEven = num.isEven(item);
        /** * Se *`item`* for um *`HTMLElement`* obtém seu nome de tag, caso contrário o valor é *`null`*. @type {string | null} */
        this.tagName =
            _.type(item) == "HTMLElement" ? item.tagName.toLowerCase() : null;
        /** * Se *`item`* for uma *`string`* indica se está totalmente em letras maiúsculas, caso contrário o valor é *`null`*.*/
        this.isUpper =
            _.type(item) == "string" ? item === item.toUpperCase() : null;
        /** * Se *`item`* for uma *`string`* indica se está totalmente em letras minúsculas, caso contrário o valor é *`null`*.*/
        this.isLower =
            _.type(item) == "string" ? item === item.toLowerCase() : null;
        /** * Se *`item`* for uma *`string`* indica se possui pelo menos um caractere alfabético maiúsculo, caso contrário o valor é *`null`*.*/
        this.hasUpper = _.type(item) == "string" ? str.hasUpper(item) : null;
        /** * Se *`item`* for uma *`string`* indica se possui pelo menos um caractere alfabético minúsculo, caso contrário o valor é *`null`*.*/
        this.hasLower = _.type(item) == "string" ? str.hasLower(item) : null;

    }
}
