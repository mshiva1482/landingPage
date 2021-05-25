const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.nav');

toggle.addEventListener('click', menuToggle);

function menuToggle(e){
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
}
