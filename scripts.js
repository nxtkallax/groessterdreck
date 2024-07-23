var bilder = [
    "/dreck/img/kippenfisch.jpg",
    "/dreck/img/bocchi.jpg",
    "/dreck/img/chiyo.jpg",
    "/dreck/img/fish.jpg",
    "/dreck/img/logo.png",
    "/dreck/img/meme.jpg",
    "/dreck/img/osaker.jpg",
    "/dreck/img/reimu.jpg",
    "/dreck/img/toshinokyouko.png",
];
var zufallsIndex = Math.floor(Math.random() * bilder.length);
document.getElementById("randomImage").src = bilder[zufallsIndex];
function playSound() {
    var image = document.getElementById("randomImage");
    var currentSrc = image.src;
    if (currentSrc.includes("toshinokyouko.png")) {
        var audio = document.getElementById("toshinokyouko");
        audio.play();
    } else {
        var audio = document.getElementById("yeehaw");
        audio.play();
    }
}