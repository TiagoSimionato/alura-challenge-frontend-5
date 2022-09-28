const consoleScroller = document.querySelector('#console-scroller');
const searchElement = document.querySelector('#search-box');

consoleScroller.addEventListener('click', () => {
    document.querySelector('#console-section').scrollIntoView();
});

searchElement.addEventListener('change', () => {
    window.alert('Isso não faz nada!');
});