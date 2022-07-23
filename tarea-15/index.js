var nombre = "dereck";
var apellido = "tello";
const mipersona = {
    nombre,apellido
};

sessionStorage.setItem("persona",JSON.stringify(mipersona));
localStorage.setItem("persona",JSON.stringify(mipersona));

document.cookie = "datos: " + JSON.stringify(mipersona) + "; expires=" + new Date(now.getTime() + 120000);

