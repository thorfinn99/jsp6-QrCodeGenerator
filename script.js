let imgBox = document.getElementById("imgBox")
let qeImage = document.getElementById("qrImage")
let qeText = document.getElementById("qrText")

function generateQr(){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value
}
