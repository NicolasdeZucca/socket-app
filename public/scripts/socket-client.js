const socket = io();

//HTML elements
statusOnline  = document.querySelector('#spn-online');
statusOffline = document.querySelector('#spn-offline');

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