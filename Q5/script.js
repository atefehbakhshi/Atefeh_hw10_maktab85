'use strict'
let elem = document.getElementById('elem');

const clear = (element) => {
    let children = [...element.childNodes];
    children.forEach(item => item.remove());
}

clear(elem);