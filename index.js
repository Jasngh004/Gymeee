let Btn = document.querySelector('#submitbtn');
Btn.addEventListener('click',showmsg);

function showmsg(){
    alert("Your Response Submitted!");
}

let Btnjoin = document.querySelector('#sendbutton');
Btnjoin.addEventListener('click',otp);

function otp(){
    alert("OTP sent to your mobile!");
}
