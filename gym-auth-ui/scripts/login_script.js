let licznik = 0;
let i = 0;
function changeImageEvery5s(){
    let tab = ["pexels-anush-1229356","pexels-anush-1431282"];
    setInterval(() => {
        if(i == 2){
            i = 0;
        }
        licznik++;
        if(licznik == 5){
            document.getElementById("side-image").style.backgroundImage = "url('../images/" + tab[i] + ".jpg')";
            i++;
            licznik = 0;
        }
    }, 1000)
    
} 

window.onload = function() {
  changeImageEvery5s();
};