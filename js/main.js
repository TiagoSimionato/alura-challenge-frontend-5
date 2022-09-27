const consoleScroller = document.querySelector('#console-scroller');

consoleScroller.addEventListener('click', () => {
    document.querySelector('#console-section').scrollIntoView();
});
