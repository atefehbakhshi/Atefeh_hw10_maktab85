'use strict'
let container = document.querySelector('.container');
let message = document.querySelectorAll('.message');
message.forEach(item => {
    item.style.position = 'relative';
    let span = document.createElement('span');
    span.className = 'span';
    span.textContent = '[X]';
    span.style.cssText = `
    position:absolute;
    right:1em;
    top:0.5em;
    color:red;
    cursor: pointer;
    `;
    item.append(span);
});

container.addEventListener('click', (e) => {
    if (e.target.className === 'span') e.composedPath()[1].remove();
})


