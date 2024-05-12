function generateQRCode(){
    let userInput = document.getElementById('userInput');
    // let QRBox = document.getElementById('QRBox');
    let QRImage = document.getElementById('QRImage');


    if(userInput.value.trim() == "" ){
        alert("Please enter a value to generate a QR code");
    }
    else{
        QRImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+userInput.value;
    }

}