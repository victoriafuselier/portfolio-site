console.log('your js file is linked properly');

const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', () => {
    const isOpened = menuButton.getAttribute('aria-expanded');
    if (isOpened === 'false') {
        menuButton.setAttribute('aria-expanded', 'true');
        document.querySelector('.home').style.display="none"
    } else {
        menuButton.setAttribute('aria-expanded', 'false');
        document.querySelector('.home').style.display="block"
    }
})