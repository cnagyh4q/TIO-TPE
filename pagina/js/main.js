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

    const reloj = document.querySelector('#reloj');
    setInterval(() => {
        let d = new Date();
        reloj.innerHTML = `${d.getFullYear()}/${d.getMonth()+1}/${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} `;
    }, 1000);
});