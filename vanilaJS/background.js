//$('body').append('<h1>' + f.name + '</h1><img src="learn/' + f.name + '"/>');

const body = document.querySelector("body");

const img_num = 10;

const random_num = Math.floor(Math.random() * img_num) + 1

function handleImgLoaded(){
    console.log("finish loding")
}

function paintBackgound(){
    const image = new Image();
    image.src = `images/${random_num}.jpg`
    image.classList.add("bgImage");
    body.appendChild(image);
    image.addEventListener("loaded", handleImgLoaded);
}

function init(){
    paintBackgound();
}
init();