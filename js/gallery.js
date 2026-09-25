function upDate(previewPic) {
    console.log("Mouse over:", previewPic.src);

    var caption = document.getElementById("caption");
    var image = document.getElementById("image");

    caption.innerHTML = previewPic.alt;
    caption.style.color = "white"; // khi hover thì chữ trắng
    image.style.backgroundImage = "url(" + previewPic.src + ")";
}

function undo() {
    console.log("Mouse out");

    var caption = document.getElementById("caption");
    var image = document.getElementById("image");

    caption.innerHTML = "Hover over an image below to display here.";
    caption.style.color = "black"; // trở lại màu đen
    image.style.backgroundImage = "url('')";
}
