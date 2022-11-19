'use strict'
const userList = () => {
    let ul = document.createElement('ul');
    document.body.append(ul);
    while (true) {
        let liContent = prompt('Enter your lists');
        if (liContent === null) break;
        let li = document.createElement('li');
        li.textContent = liContent;
        ul.append(li);
    }
}
userList();