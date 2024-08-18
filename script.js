const body = document.getElementsByTagName("body")[0]

function setColor(name) {
    body.style.backgroundColor = name;
}

function randomColor() {
    const blue = Math.round(Math.random() * 255)
    const cobalt = Math.round(Math.random() * 255);
    const indigo = Math.round(Math.random() * 255);

    const color = `rgb(${blue}, ${cobalt}, ${indigo})`;
    setColor(color);
    console.log("lala");
}

// const randomButton = document.getElementById("random");
 //randomButton.addEventListener('click', randomColor());