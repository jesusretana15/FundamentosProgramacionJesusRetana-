let imgSpace = document.getElementById("imgSpace");
let imgSRC = "";

imgSRC = '<img src="./imagenes/carronegro.png" class="img-fluid" style="height: 300px;">'
imgSpace.innerHTML = imgSRC;

function cambiarColor(color) {
    

    switch (color) {
        case "negro":
            imgSRC = '<img src="./imagenes/carronegro.png" class="img-fluid" style="height: 300px;">'
            imgSpace.innerHTML = imgSRC;

            break;
        case "rojo":
            imgSRC = '<img src="./imagenes/carrorojo.png" class="img-fluid" style="height: 300px;">'
            imgSpace.innerHTML = imgSRC;
            break;
        case "azul":
            imgSRC = '<img src="./imagenes/carroazul.png" class="img-fluid" style="height: 300px;">'
            imgSpace.innerHTML = imgSRC;
            break;
        case "blanco":
            imgSRC = '<img src="./imagenes/carroblanco.png" class="img-fluid" style="height: 300px;">'
            imgSpace.innerHTML = imgSRC;
            break;
    
        default:
            break;
    }
}