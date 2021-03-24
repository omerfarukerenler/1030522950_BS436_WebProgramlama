const resim=document.getElementById("resim");
const resim1=document.getElementById("resim1");
const resim2=document.getElementById("resim2");
const kazandi=document.getElementById("kazandiId")
const yenildi=document.getElementById("yenildiId")
// const alanId=document.getElementById("alanId");

const dizi=["img/kopek.jpg","img/kedi.jpg","img/zebra.jpg"]

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
shuffle(dizi)
console.log(dizi)
document.getElementById("resim").src=dizi[0];
document.getElementById("resim1").src=dizi[1];
document.getElementById("resim2").src=dizi[2];

var deneme=0;
function myFunction(){
    resim.style.opacity=1;
    deneme++;
    if(resim.getAttribute("src")=="public/img/kedi.jpg" && deneme<=2 ){
        kazandi.style.visibility="visible"
        resim.onclick=""
        resim1.onclick=""
        resim2.onclick=""
    }
    if(deneme>2){
        yenildi.style.visibility="visible"
    }
}
function myFunction1(){
    resim1.style.opacity=1
    deneme++
    if(resim1.getAttribute("src")=="public/img/kedi.jpg" && deneme<=2){
        kazandi.style.visibility="visible"
        resim.onclick=""
        resim1.onclick=""
        resim2.onclick=""
    }
    if(deneme>2){
        yenildi.style.visibility="visible"
    }
}

function myFunction2(){
    resim2.style.opacity=1
    deneme++
    if(resim2.getAttribute("src")=="public/img/kedi.jpg"&& deneme<=2 ){
        kazandi.style.visibility="visible"
        resim.onclick=""
        resim1.onclick=""
        resim2.onclick=""
    }
    if(deneme>2){
        yenildi.style.visibility="visible"
    }
}