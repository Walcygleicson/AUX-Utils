//Função que calcula a média entre numeros
function calcMedia(...args){
    let soma = 0;
    for (let i in args) {
        if(typeof args[i] == 'number'){
            soma += args[i];  
        }else{
            throw new Error('Argumento não é um número');
        }                
    }    
    
    return soma / args.length;
}