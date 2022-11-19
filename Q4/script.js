'use strict'
let container = document.getElementById('container');
let data = {
    "Fish": {
        "trout": {},
        "salmon": {}
    },
    "Tree": {
        "Huge": {
            "sequoia": {},
            "oak": {}
        },
        "Flowering": {
            "apple tree": {},
            "magnolia": {}
        }
    }
};

const maker = (content) => {
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.textContent = content;
    ul.append(li);
    return ul
}

const createTree = (container, data) => {
    for (const [key, value] of Object.entries(data)) {
        let ul = maker(key);
        if (value !== {}) { createTree(ul, value) }
        container.append(ul)
    }
}

createTree(container, data);