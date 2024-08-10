let abrirMenu = document.getElementById('abrirMenu');
let menu = document.getElementById('menuMobile');
let overlay = document.getElementById('overlayMenu');

function abrir() {
    menu.style.width = '100%';
    overlay.classList.add('show');
    abrirMenu.style.display = 'none';
}

function fechar() {
    menu.style.width = '0%';
    overlay.classList.remove('show');
    abrirMenu.style.display = 'block';
}