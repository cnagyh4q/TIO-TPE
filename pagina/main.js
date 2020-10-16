const TEMPLATES_URL = './templates/';
let content; // div donde se muestra el contenido traido con partial render

async function load(templateName) {
    try {
        let html = await fetch(TEMPLATES_URL + templateName + '.html').then(r => r.text());
        content.innerHTML = html;
    }
    catch (e) {
        content.innerHTML = e.message;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    content = document.querySelector('#content');
    load('home');
});