document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('#background video');
    video.play().catch(error => {
        console.log('Autoplay foi bloqueado. O usuário precisa interagir primeiro.');
    });
});