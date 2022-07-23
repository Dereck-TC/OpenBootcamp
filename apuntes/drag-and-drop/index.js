const parrafos = document.querySelectorAll(".parrafos");
const seccion = document.querySelectorAll(".seccion");
const eliminar = document.querySelector(".delete");

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart",()=>{
        console.log("inicio de arrastre");
        console.log(parrafo.innerText);
        parrafo.classList.add("dragging");
        event.dataTransfer.setData("id",parrafo.id);
    });
    parrafo.addEventListener("dragend",()=>{
        console.log("fin de arrastre");
        parrafo.classList.remove("dragging")
    });
});
seccion.forEach(seccion => {
    seccion.addEventListener("dragover",()=>{
        event.preventDefault(); //previniendo el comportamiento por defecto
        console.log("drag over");
        event.dataTransfer.dropEffect = "copy"
    })

    //cuando lo suelto, que es lo que voy a hacer con eso
    seccion.addEventListener("drop",()=>{
        console.log("drop");
        const id_parrafo = event.dataTransfer.getData("id");
        const parrafo = document.getElementById(id_parrafo);
        seccion.appendChild(parrafo);
        // eliminar.removeChild(parrafo);
        //event.dataTransfer; para transefir datos
    })

})
eliminar.addEventListener("dragover", event => {
    event.preventDefault()
})
eliminar.addEventListener("drop",()=>{
    console.log("drop");
    const id_parrafo = event.dataTransfer.getData("id");
    const parrafo = document.getElementById(id_parrafo);
    // seccion.appendChild(parrafo);
    parrafo.remove()
    //event.dataTransfer; para transefir datos
})