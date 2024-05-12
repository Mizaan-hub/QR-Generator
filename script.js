let qrCodeGenerated = false;

function generateQRCode(){
    let userInput = document.getElementById('userInput');
    let QRImage = document.getElementById('QRImage');

    if(userInput.value.trim() == "" ){
        alert("Please enter a value to generate a QR code");
    }
    else{
        QRImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+userInput.value;
        userInput.value ="";
        qrCodeGenerated = true;
    }
}

function saveQRCode() {
    if (!qrCodeGenerated) {
        alert("QR code image is not available for download.");
        return;
    }

    const qrImage = document.getElementById("QRImage");
    const url = qrImage.src;

    fetch(url)
      .then(response => response.blob())
      .then(blob => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "QRCode.png";
            link.click();
            qrCodeGenerated = false;
            document.getElementById('userInput').value = "";
            qrImage.src = "";
        });
}