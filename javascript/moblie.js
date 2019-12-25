var screenWidth = screen.width;
var exitText = document.getElementById('message-div');
const exitTextHide = true;
var electic = document.getElementById('click');
var electicArtists = document.getElementById('Electric');

if (screenWidth < 800){
    document.getElementsByTagName("div")[0].className = "audio-left";
}

while(true){
    var screenWidth = screen.width;
    document.getElementById(width).value = screenWidth;

    if (screenWidth < 800){
        document.getElementsByTagName("div")[0].className = "audio-left";
    }

    if (exitTextHide == true){
        exitText.hidden = true;
    }
}