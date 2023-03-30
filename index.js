const changeColorAfter = (delay, color) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const colorBox = document.getElementById('color-box');
            colorBox.style.backgroundColor = color;
            resolve();
        }, delay);
    });
};
changeColorAfter(1000, 'red')
.then(() => changeColorAfter(2000, 'orange'))
.then(() => changeColorAfter(3000, 'yellow'))
.then(() => changeColorAfter(1000, 'green'))
.then(() => changeColorAfter(4000, 'blue'))
.then(() => changeColorAfter(5000, 'indigo'))