var videos = {
    video1: "../Videos/video1.mp4",
    video2: "../Videos/video2.mp4",
    video3: "../Videos/video3.mp4"
}

function videoRandom(){ 
    let numerox = getRandomInt(3) + 1;
    let video;
    switch(numerox){
        case 1: video = videos.video1
        break;
        case 2: video = videos.video2
        break;
        case 3: video = videos.video3
        break;
        default: video = videos.video1;
    }
    let text = document.getElementById("videohtml");
    text.setAttribute("src", video);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}