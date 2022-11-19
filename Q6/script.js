'use strict'
let button = document.getElementById('hider');
let div = document.getElementById('text');

button.addEventListener('click', () => {
    // hide
    setTimeout(() => div.style.display = 'none', 1000)
    setTimeout(() => button.style.display = 'none', 2000)

    // delete
    // setTimeout(() => div.remove(), 1000)
    // setTimeout(() => button.remove(), 2000)
});