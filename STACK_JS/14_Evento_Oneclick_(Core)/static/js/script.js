const boton1 = document.querySelectorAll('.btn-like');

boton1.forEach(function(button) {
    button.addEventListener('click', function() {
        let currentLikes = parseInt(button.innerText);
        currentLikes++;
        button.innerText = currentLikes + ' Me gusta';
    });
});

const btnProfile = document.querySelector('.btn-profile');

btnProfile.addEventListener('click', function() {
    alert('cargando el perfil del usuarioo');
});

const likeButtons = document.querySelectorAll('.btn-like');

likeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        let currentLikes = parseInt(button.innerText);
        currentLikes++;
        button.innerText = currentLikes + ' Me gusta';
    });
});