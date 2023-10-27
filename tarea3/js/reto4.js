function cambio(opcion) {
    let imgSpace = document.getElementById("imgBox");
    let h5Space = document.getElementById("h5Box");
    let pSpace = document.getElementById("pBox");

    if (opcion =="default") {
        document.getElementById("defaultOpciones").hidden = false;
        document.getElementById("tabladedatos").hidden = true;
        
    } else if (opcion == "readytowear") {
        document.getElementById("tabladedatos").hidden = false;
        document.getElementById("defaultOpciones").hidden = true;
        let h5 = "BREASTS SHORT JACKET";
        let text = "This short jacket is made in natural Japanese denim embellished with tonal topstitching and decorated with hand-painted patterns designed by Daniel Roseberry, Creative Director of the Maison, exclusively for the collection. Its short cut with exaggeratedly rounded shoulders revisits the classic denim jacket with chest pockets. The jacket is embellished with a velvet contrasted collar and cuffs and encrusted with tonal conical breasts. The jacket is decorated with a row of hammered golden brass buttons on the front and an adjustment strap to adapt the size on the back."
        let imagen = "<img src='./imagenes/jacket.jpeg' class='img-fluid'>"; 
        h5Space.innerHTML = h5;
        imgSpace.innerHTML = imagen;
        pSpace.innerHTML = text;

    } else if (opcion == "jewelry") {
        document.getElementById("tabladedatos").hidden = false;
        document.getElementById("defaultOpciones").hidden = true;
        let h5 = "OYSTERS NECKLACE";
        let text = "This hammered golden brass and rhinestone necklace represents textured oysters. It is adorned with an S clasp and a ridged teardrop pendant. ";
        let imagen = "<img src='./imagenes/necklace.jpeg' class='img-fluid'>"; 
        h5Space.innerHTML = h5;
        imgSpace.innerHTML = imagen;
        pSpace.innerHTML = text;

    }else if (opcion == "leather") {
        document.getElementById("tabladedatos").hidden = false;
        document.getElementById("defaultOpciones").hidden = true;
        let h5 = "GOLDEN ANATOMY JEWELRY BAG";
        let text = "This Bijoux handbag in golden laminated calfskin and lambskin lining is decorated with signature anatomical bijoux in enamel and hammered golden brass forming a trompe-l'oeil face. It features the Maison's signature Shocking pink interior lining and two leather handles."
        let imagen = "<img src='./imagenes/bag.jpeg' class='img-fluid'>"; 
        h5Space.innerHTML = h5;
        imgSpace.innerHTML = imagen;
        pSpace.innerHTML = text;

    }
    } 

   

    



