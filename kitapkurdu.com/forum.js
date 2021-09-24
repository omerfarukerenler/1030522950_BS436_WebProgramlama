const messages = document.getElementById("messages");
const textbox = document.getElementById("textbox");
const button = document.getElementById("button10");


button.addEventListener("click", function () {
        const newMessage = document.createElement("ul");
        newMessage.innerHTML = textbox.value;
        messages.appendChild(newMessage);
        textbox.value = "";


});


function Goster(){
        alert("Yorumunuz alınmıştır.Uygun olduğu zaman en kısa surede yayımlanacaktır.Kırmızı rengin geçmesini bekleyiniz..");
}