let imageArray = ["Images/clover.png", "Images/rose.png", "Images/white_rose.png",
    "Images/white.png",
    "Images/yellow.png"
];

let imageEle = document.getElementById("image");
c = 0;

function imageChange() {
    if (c < imageArray.length-1) {
        c++;
        console.log(c)
        imageEle.src = imageArray[c];
    }
    else{
        c=0;
        imageEle.src = imageArray[c];
    }

}

interval = setInterval(imageChange, 3000)