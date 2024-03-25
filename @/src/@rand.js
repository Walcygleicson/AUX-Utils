import { __ as _ } from "../internal/@utils.js";
import "../docs/@rand-doc.js"
"use strict"



//######### RAND ########################################
/**
 * ***`AUX.Utils`***
 * Ler Documentação {@link https://github.com/Walcygleicson/AUXDocs AUXDocs}
 * 
 * ------
 * * Objeto provém de métodos que manipulam valores pseudo aleatórios.
 * >
 */
const rand = {}


/////////// .color ///////////////
/**
 * * Gera uma cor aleatória no formato *`exadecimal`* e a retorna em uma string.
 * ---
 * @example
 * .color() => "#3FEE3D"
 */
rand.color = function () {
    var letters = "0123456789ABCDEF";
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    letters = null
    return color;
}

////////// .letters //////////////

/**
 * * Retorna um caractere ou sequência de caracteres `alfabético` (`Unicode`) sem distinção entre maiúsculas ou minúsculas.
 * ----
 * @param {number} length
 * * Define o tamanho da sequência de letras geradas. Se nada for passado o padrão é `1`.
 * -----
 * @param {CaseKeyWords} letterCase
 * * Uma palavra-chave que define se a letra gerada será maiúscula ou minúscula. As opções são:
 * > * **`"lower"`** - Define letras minúsculas.
 * > * **`"upper"`** - Define letras maiúsculas.
 * * Se nada for passado o padrão é aleatório.
 * ----
 * @example
 * .letters() => "a" ou "A"
 * .letters(5) => "aZHeo"
 * .letters(5, "lower") => "azheo"
 * .letters(5, "upper") => "AZHEO"
 * @returns {string}
 */
rand.letters = function (length = 1, letterCase = null) {
    let res = ''
    for(let i = 0; i < length; i++){
        switch (letterCase) {
            case 'lower':
                res += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
                break
            case 'upper':
                res += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
                break
            default:
                if (rand.int() >= 5) {
                    res += this.letters(1,'lower' )
                } else {
                    res += this.letters(1, "upper")
                }
        }
        
    }

    return res
}

/////////// .int //////////////////
/**
 * * Gera um número inteiro entre dois intervalos definidos. Se nenhum intervalo for definido o número será gerado entre 0 e 9.
 * ---
 * @param {number} end
 * * Define o fim do intervalo começado em `0`. Se nada for passado o padrão é `9`.
 * ----
 * @param {number} start
 * * Define o início do intervalo. Se nada for passado o padrão é `0`.
 * ----
 * @example
 * .int() => Valor inteiro entre 0 e 9
 * .int(3) => Valor inteiro entre 0 e 3
 * .int(50, 10) => Valor inteiro entre 10 e 50
 */
rand.int = function (end = 9, start = 0 ){
    return Number(Math.floor(Math.random()*(end - start + 1) + start));
}

///////// .float /////////////
/**
 * * Gera um número de ponto flutuante (*`float`*) com intervalo padrão entre `0.0` e `1.0`.
 * -----
 * @param {number} end
 * * Define o final do intervalo começado em `0.0`. Se não for passado o padrão será `1.0`.
 * ----
 * @param {number} start
 * * Define o início do intervalo. Se não for passado o padrão será `0.0`.
 * ----
 * @param {number} decimals
 * * Número de casas decimais depois do ponto flutuante. Este pode ser um valor entre `0` e `16`. Se nada for passado o padrão é `16`.
 * ---
 * @example
 * .float() => Valor entre 0.0 e 1.0 => 0.8460098763524156
 * .float(1.2) => Valor entre 0.0 e 1.2 => 1.126489763456897
 * .float(3.2, 1.0) => Valor entre 1.0 e 3.2 => 2.450009721765374
 * .float(1.0, 0.0, 2) Valor entre 0.0 e 1.0 formatado => 0.84
 */
rand.float = function (end = 1.0, start = 0, decimals=16) {
    return Number((Math.random() * (start - end) + end).toFixed(decimals))
}


/**
 * * Gera sequências alfanumérica que, opcionalmente, podem ser personalizadas usando combinações em *`options`*. Se *`options`* for omitido, por padrão, gera uma sequência de `8` caracteres contendo entre números e letras sem distinção de maiúsculas ou minúsculas.
 * ----
 * @param {GeneratorOptions} options
 * *`(opcional)`*
 * * Um objeto que define algumas personalizações nas sáidas geradas. Recebe as seguintes opções de propriedades:
 * 
 * > * **`case:`** Uma palavra-chave que define letras maiúsculas ou minúsculas. As opções são:
 * > > * *`"lower"`* - Define letras minúsculas.
 * > > * *`"upper"`* - Define letras maiúsculas.
 * 
 * > * **`length:`** Um número que define o tamanho da sequência de caracteres. Se for omitido o padrão é `8`. Nota: Não funciona com tipos gerados que possuem um tamanho fixo como *`"cell"`*, *`"date"`* e etc...
 * 
 * > * **`sep:`** Um caractere usado para separar a sequência em pontos específicos definidos em *`options.sepRange`*. Se um ponto de separação não for definido o separador é inserido no meio ou se a sequência já possuir separadores fixos como o tipo *`date`* (mm/dd/yyyy) os separadores padrões serão substituídos pelo definido. Nota: O tamanho final da sequência não inclui os separadores.
 * 
 * > * **`sepRange:`** Um número que define após quantos caracteres um separador deve ser inserido. Nota: Não funciona se um *`options.sep`* não for defindio ou se o tipo da sequência já possuir separadores com posições fixas como, por exemplo, *`date`* (mm/dd/yyyy) e etc...
 * 
 * > * **`chars:`** Uma string contendo outros caracteres para serem inclusos na geração da sequência. Como por exemplo: `"@#*%"`. Nota: Não funciona com tipos que possuem somente número como *`cell`* `(00) 0000-0000` ou *`options.type: "digit"`* e etc...
 * 
 * > * **`type:`** Uma palavra-chave que define um tipo de sequência gerada. As opções são:
 * 
 * > > * *`"digit"`* - Somente dígitos (números).
 * > > * *`"password"`* - Uma combinação que inclui caracteres especiais.
 * > > * *`"letter"`* - Somente letras.
 * > > * *`"cell"`* - Um número de celular completo com DDD + 8 dígitos.
 * > > * *`"date"`* - Uma data completa padrão (`mm/dd/yyyy`).
 * > > * *`"hour"`* - Um horário completo (`hh:mm:ss`).
 * > > * *`"cpf"`* - Um cpf completo.
 * > > * *`"random"`* - (padrão) Aleatório entre números e letras.
 * ---
 * @example
 * .gen() =>  "Ao1sD580"...
 * .gen({case: "upper"}) => "AL300KP1"...
 * .gen({type: "digit"}) => "87645321"...
 * .gen({length: 3}) => "P3a"...
 * .gen({type: "digit", sep: "-", sepRange: 2}) => "54-00-23-91"...
 * .gen({chars: "#@*&%"}) => "e4@kp0**8"...
 */
rand.gen = function (options = {}) {
    
    options = {
        length: options.length || 8,
        type: options.type || "random",
        case: options.case || null,
        chars: options.chars || null,
        sep: options.sep || null,
        sepRange: parseInt(options.sepRange) || null,
        randomInt: () => { return Math.floor(Math.random() * 10); },
        randomUpper: () => { return String.fromCharCode(Math.floor((Math.random() * 26) + 65)) },
        randomLower: ()=>{return String.fromCharCode(Math.floor((Math.random() * 26) + 97))},
        caseChoice: () => {
            if (options.case == "upper") {
                return 1;
            } else if (options.case == "lower") {
                return 2;
            } else {
                return Math.floor(Math.random() * (2 - 1 + 1)) + 1;
            }
        },
        choice: (values) => {
            values = values.split("")
            let index = Math.round(Math.random() * (values.length - 1));
            return values[index];
        }
    }

    let res = ""
    /**0 = digits | 1 = letter-upper | 2 = letter-lower | 3 = outros caracteres */
    let choice
    //Se não for esses tipos...
    if (!["cep", "cpf", "key", "cell", "date", "hour"].includes(options.type)) {
        console.log("tipos não padrão")
        for(let i = 0; i < options.length; i++){
            // Selecionar types "digit", "password", "letter"
            switch (options.type) {
                case "digit":
                    choice = 0
                    break
                //////////////////
                case "letter":

                    //Verificar se options.chars foi definido
                    if (options.chars) {
                       choice = Math.round(Math.random() * 3);
                       if (choice < 3 && choice > 0) {
                           choice = options.caseChoice();
                       } 
                    } else {
                        choice = options.caseChoice()
                    }
                    break
                ////////////////
                case "password":
                    choice = Math.round(Math.random() * 3);

                    //Verficar se chars já foi definido
                    if (options.chars) {
                        options.chars += "@#&._-*$%!?+=:/|^~<>";
                    } else {
                        options.chars = "@#&._-*$%!?+=:/|^~<>";
                    }
                    
                    //Escolha entre maiuscula e minuscula
                    if (choice < 3 && choice > 0) {
                        choice = options.caseChoice();
                    }
                    break
                ////////////////
                default:
                    if (options.chars) {
                        choice = Math.round(Math.random() * 3);
                        if (choice < 3 && choice > 0) {
                            choice = options.caseChoice();
                        }
                    } else {
                        choice = Math.round(Math.random() * 2); 
                    }
            }

            switch (choice) {
                case 0: // Numérico
                    res += options.randomInt()
                    break
                case 1:
                    res += options.randomUpper()
                    break
                case 2:
                    res += options.randomLower();
                    break
                case 3:
                    res += options.choice(options.chars);

            }
        }

        // Se um separador for defindido
        if (options.sep) {
            res = res.split("")
            // Se um local de separar for definido
            if (options.sepRange) {
                options.count = 0 //Contador reinicia sempre que igualar ao valor de options.sepRange.
                res = res.map((item, i) => {
                    options.count++
                    if (options.count == options.sepRange && res[i + 1]) {
                        options.count = 0
                        return item + options.sep;
                    }
                    return item
                })
                
            } else { // Se não for inserir separador no meio
                res[parseInt(options.length / 2) - 1] = res[parseInt(options.length / 2)] + options.sep
            }
            
    
            res = res.join("")
        }
    } else if (options.type == "cell") {
        let ddd = Math.floor(Math.random() * 99 + 1);
        ddd < 10? ddd = "0" + ddd : null
        for (let i = 0; i < 8; i++) {
            res += Math.floor(Math.random() * 10);
            //Inserir separador
            i == 3? res += options.sep || "-" : null
        }
        res = `(${ddd}) ${res}`;
        ddd = null
    } else if (options.type == 'cpf') {
        for(let i = 0; i < 11; i++){
            res += Math.floor(Math.random() * 10);
            if(i == 2 || i == 5){
                res += options.sep || ".";
            }else if(i == 8){
                res += '-';
            }
        }
    } else if (options.type == 'date') {
        // Gerar dia
        let day  = Math.floor(Math.random() * 28) + 1;
        day < 10 ? day = "0" + day : day;
        // Gerar mes
        let month = Math.floor(Math.random() * 12) + 1  ;
        month = month < 10 ? "0" + month : month;
        // Gerar ano
        let currentYear = new Date().getFullYear()
        let year = Math.floor(Math.random()*(1900-currentYear)) + currentYear;
        
        res = month + (options.sep || "/") + day + (options.sep || "/") + year;
        day = null, month = null, year = null, currentYear = null;
    
    } else if (options.type == "hour") {
        let hour = Math.floor(Math.random() * 24);
        hour < 10 ? hour = "0" + hour : null
        let min = Math.round(Math.random() * 60)
        min < 10 ? min = "0" + min : null
        let sec = Math.round(Math.random() * 60);
        sec < 10 ? (sec = "0" + sec) : null;
       
        res = hour + (options.sep || ":") + min + (options.sep || ":") + sec;
        hour = null, min = null, sec = null;
    }

    return res
}


//////////// .choice ////////////
/**
 * * Escolhe um valor presente em uma lista (incluindo um *`object`*)  e o retorna. Se for passado uma *`string`* ela será quebrada e um caractere será escolhido. Se passado um valor que não possa ter seus membros acessados um a um por índices o valor será apenas retornado de imediato.
 * ----
 * @param {*} list
 * * Uma coleção de itens. Pode ser um *`array`*, *`object`*, *`string`*, *`nodeList`* ou um *`HTMLCollection`* (ou qualquer outro tipo que possua a propriedade *`length`*).
 * ----
 * @example
 * .choice(["blue", "red", "green"]) => "red"...
 * .choice("hello") => "l"...
 * .choice({a: "blue", b: "red", c: "green"}) => "green"...
 */
rand.choice = function (list) {
    
    switch (_.type(list)) {
        case "string":
            list = list.split("")
            break
        case "object":
            list = Object.values(list)
            break
        default:
            if (list.length === undefined) {
                list = [list]
            }
            break
    }
    
    let index = Math.round(Math.random() * (list.length - 1));
    return list[index];
}

            
export {rand as __}