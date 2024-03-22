const __ = {}

/**
 * Retorna o tipo real de um objeto 
 * @returns {string} 
 */
__.type = function (obj) {
    
    obj = Object.prototype.toString.call(obj).slice(8, -1);

    obj.includes("HTML") && obj.includes("Element")
        ? (obj = "HTMLElement")
        : null;

    if (obj[0] === obj[0].toUpperCase() && obj[1] !== obj[1].toUpperCase()) {
        obj = obj.charAt(0).toLowerCase() + obj.slice(1);
    }

    return obj;
}

export {__}