const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn= document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("submitBtn");

const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `You are Subscribed!`;
    }
    else{
        subResult.textContent = `You are Not Subscribed!`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `Your are paying with Visa!`;
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = `Your are paying with MasterCard!`;
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = `Your are paying with PayPal!`;
    }
    else{
        paymentResult.textContent = `You must select a payment method!`;
    }
}
