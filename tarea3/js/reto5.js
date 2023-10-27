

function calcular() {
    let modelo = document.getElementById("modelos").value;
    let memoria = document.getElementById("memoria").value;

    let imgSpace = document.getElementById("imgEleccion");
    let textSpace = document.getElementById("datosEleccion");

    let imgsrc = "";
    let txt = "";

    if (modelo == "defaultModelo" || memoria == "defaultMemoria") {
        document.getElementById("imgDefault").hidden = false;
        document.getElementById("eleccion").hidden = true;

    } else {
        
        switch (modelo) {
            case "iphone15pro":
                document.getElementById("imgDefault").hidden = true;
                document.getElementById("eleccion").hidden = false;
                 imgsrc = '<img src="./imagenes/iphone-15-pro.jpeg" class="img-fluid" alt="">'
                imgSpace.innerHTML = imgsrc
                 txt = "<h3>iPhone 15 Pro</h3><p>Capacidad: " + memoria + "GB</p>"
                textSpace.innerHTML= txt;
                break;
            case "iphone15":
                document.getElementById("imgDefault").hidden = true;
                document.getElementById("eleccion").hidden = false;
                 imgsrc = '<img src="./imagenes/iphone-15.jpeg" class="img-fluid" alt="">'
                imgSpace.innerHTML = imgsrc
                txt = "<h3>iPhone 15 </h3><p>Capacidad: " + memoria + "GB</p>"
                textSpace.innerHTML= txt;
                break;
            case "iphone14":
                document.getElementById("imgDefault").hidden = true;
                document.getElementById("eleccion").hidden = false;
                imgsrc = '<img src="./imagenes/iphone-14.jpeg" class="img-fluid" alt="">'
                imgSpace.innerHTML = imgsrc
                txt = "<h3>iPhone 14 </h3><p>Capacidad: " + memoria + "GB</p>"
                textSpace.innerHTML= txt;
                break;
        
            default:
                break;
        }
    }
}