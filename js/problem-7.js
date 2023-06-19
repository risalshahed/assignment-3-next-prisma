// Problem 7

// 7(a)
document.addEventListener('click', e => {
    // console.log(e);
    const x = e.clientX;
    const y = e.clientY;
    alert(`Clicked at coordinates (x, y): ${x}, ${y}`);
});

// 7(b)
document.addEventListener('keydown', e => {
    // console.log(e);
    const keyCode = e.keyCode || e.which;
    alert(`Pressed key code: ${keyCode}`);
});

// 7(c)

const changeImg = (src, alt) => {
    const myImg = document.querySelector('#p7c');
    myImg.src = src;
    myImg.alt = alt;
}