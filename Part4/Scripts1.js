function Login(){
    const myButton = document.getElementById('cenbutton');
    myButton.style.display='None';
    const myForm = document.getElementById('cenpop');
    myForm.style.display='Block';
}

function CancelLogin(){
    const myButton = document.getElementById('cenbutton');
    myButton.style.display='Block';
    const myForm = document.getElementById('cenpop');
    myForm.style.display='None';
}