'use strict'
let links = document.querySelectorAll('a');
links.forEach(item => {
    item.closest('li').style.color = 'blue';
    let href = item.getAttribute('href');
    if ((href.search('://')) >= 0 && (href.search('http://internal.com')) !== 0) {
        item.style.color = 'orange'
        item.closest('li').style.color = 'orange';
    };
});