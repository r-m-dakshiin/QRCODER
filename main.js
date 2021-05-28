

let Generateqrcode = new QRCode(document.getElementById("qrcode"), {
    width: 500,
    height: 500,
    borderRadius:40,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});



function CreateQRImage(){
    let CreateQRtext = document.getElementById("texti").value;
    Generateqrcode.makeCode(CreateQRtext);
}

function ClearQRText(){
    document.getElementById("texti").value = "";
    
}
var myVar = setInterval(myTimer, 1000);
function myTimer(){
    var d = new Date();
    document.getElementById("times").innerHTML = d.toLocaleTimeString();
}
