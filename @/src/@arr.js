import "../docs/@rand-doc.js"
import { __ as _ } from "../internal/@utils.js"
import { ItemProperties as Res } from "../internal/@interfaces.js"

//########## ARR ################################//
const arr = {}

/**
 * @typedef {import("../docs/@rand-doc.js").HandlerFunction} HandlerFunction
 * @typedef {import("../docs/@rand-doc.js").HandlerFunction_stop} HandlerFunction_stop
 */

//////////// .for ///////////////
/**
 * * Percorre os valores contidos em um array e executa uma função *`callback`* para cada item.
 * ---
 * @param {Array} array
 * * Um array a ser percorrido.
 * ----
 * @param {HandlerFunction} handler
 * * Uma função manipuladora para cada iteração.
 * ------
 * @example
 * const list = ["blue", "red", "green", 3.5]
 * .for(list, function(){...})
 */
arr.for = function (array, handler) {
    for(let i = 0; i < array.length; i++){
        handler(new Res({
            item: array[i],
            i: i,
            root: array
        }))
    }
}

/////////// .new ///////////////
/**
 * * Executa um laço de repetição dado a quantidade em *`iterator`* e cria uma novo *`array`* com os resultados retornados da função *`callback`* passada. Se não houver nenhum *`return`* cria um *`array`* vazio.
 * * Nota: Além de um *`number`*, também é possível passar um *`array`* como argumento do primeiro parâmetro, assim a função executa a repetição com base no tamanho do *`array`*, sendo também possível acessar os valores do *`array`* nos parâmetros da *`callback function`*.
 * -----
 * @param {number | Array} iterator
 * * Um número que define a quantidade de repetições a ser executada.
 * ----
 * @param {HandlerFunction} handler
 * * Uma função que deve retornar um valor para compor o novo *`array`*.
 * ----
 * @example
 * .new(3, function(){return "hello"}) => ["hello", "hello", "hello"]
 * 
 * const list = ["world", "bro"]
 * .new(list, function({item}){
 *      return "hello " + item
 * }) => ["hello  world", "hello bro"]
 * 
 * const ob = {a:"world", b:"bro"}
 * .new(ob, function({item}){
 *      return "hello " + item
 * }) => ["hello  world", "hello bro"]
 * 
 * const str = "123"
 * .new(str, function({item}){
 *      return "hello" + item
 * }) =>  ["hello1", "hello2", "hello3"]
 * @returns {Array}
 */
arr.new = function (iterator, handler) {
    if (iterator.length !== undefined) {
        var arrBox
        arrBox = [...iterator]
        iterator = iterator.length
    } else if (_.type(iterator) == 'object') {
        arrBox = Object.values(iterator)
        iterator = arrBox.length
    }

    let result
    let res = []
    for (let i = 0; i < iterator; i++){
        if (arrBox) {
            result = handler(new Res({ item: arrBox[i], i: i, root: arrBox, result: res }))
            
        } else {
            result = handler(new Res({ item: null, i: i, result: res }));
        }
        result !== undefined? res.push(result) : null
    }
    result = null, arrBox = null
    return res
}

////////////// .loop ///////////
/**
 * * Executa um *`loop`* e cria um novo *`array`* com os resultados retornados da função *`callback`* passada. Se não houver nenhum *`return`*, cria um *`array`* vazio.
 * * Nota: Para encerrar o *`loop`* é esperado a invocação e execução da função *`stop()`* que é passada no segundo parâmetro da *`callback function`*, caso contrário gera um loop infinito que resultará em um erro.
 * 
 * @param {HandlerFunction_stop} handler 
 * @returns {Array}
 */
arr.loop = function (handler) {
    let res = []
    let x = {
        stop: false,
        fn: (condition) => {
            if (!["number", "boolean"].includes(_.type(condition))) {
                x.stop = true
            } else {
                _.type(condition) == 'number' && x.i >= condition ? x.stop = true : null
                _.type(condition) == 'boolean'? x.stop = condition : null
            }
        },
        i: 0,
    }

    while (!x.stop) {
        x.i++
        res.push(handler(new Res({item: null, i:x.i, result: res}), x.fn))
    }

    x = null
    return res
}












//################################################################
export {arr as __}
