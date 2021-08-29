const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');
let classElement = navbar.classList;

const activeMenu = () => {
    if (classElement.contains('active')) {
        classElement.remove('active');
        classElement.add('off');
    } else {
        classElement.remove('off');
        classElement.add('active');
    }
}

menu.addEventListener('click', activeMenu);

console.log(classElement);