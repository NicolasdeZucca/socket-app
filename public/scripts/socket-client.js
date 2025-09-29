const socket = io();

//HTML elements
let statusOnline  = document.querySelector('#spn-online');
let statusOffline = document.querySelector('#spn-offline');
let inputClient   = document.querySelector('#input-client');
let btnSubmit     = document.querySelector('#btn-submit');

socket.on("connect", () => {
  console.log("Conectado"); 

  statusOnline.style.display = '';
  statusOffline.style.display = 'none';
});

socket.on("disconnect", () => {
    console.log("Desconectado"); 

    statusOnline.style.display = 'none';
    statusOffline.style.display = '';
});

function getDateTime(){
    const date = new Date();

    let day   = date.getDate();
    let month = date.getMonth();
    let hour   = date.getHours();
    let minutes= date.getMinutes();
    let seconds= date.getSeconds();

    return {day, month, hour, minutes, seconds}
}

btnSubmit.addEventListener('click', () => {
    const msj = inputClient.value;
    const payload = {
        msj,
        id : socket.id,
        dateTime: getDateTime()
    }
    
    socket.emit("send-message", payload)
})