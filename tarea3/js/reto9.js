function cambioColor(modo) {
    console.log(modo)
    let body = document.getElementById("body"); 
    let nav = document.getElementById("nav"); 
    let footer = document.getElementById("footer"); 

    if (modo == "claro") {
        body.classList.remove("oscuro");
        nav.classList.remove("oscuro");
        footer.classList.remove("oscuro");
    } else if (modo == "oscuro"){
        body.classList.add("oscuro");
        nav.classList.add("oscuro");
        footer.classList.add("oscuro");
    }
}