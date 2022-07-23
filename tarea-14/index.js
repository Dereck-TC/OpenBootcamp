const btn = document.getElementById("btn");
btn.addEventListener("click", ()=>{
    alert("click en el botón");
});

$("#btn").addEventListener("click", ()=>{
    console.log("Hola, estoy usando JQuery");
});
