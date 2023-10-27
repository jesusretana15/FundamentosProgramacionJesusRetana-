function mensaje1(animal) {
    // Swal.fire('SweetAlert2 is working!' + animal)
    let textAnimal = "";

    switch (animal) {
        case "jirafa":
            textAnimal = "Este rumiante africano es el animal más alto conocido, llegando a alcanzar los 6 metros de altura. El largo cuello de las jirafas y las patas delanteras más largas que las traseras les permite alcanzar las hojas más altas de los árboles, evitando la competencia alimenticia con otros herbívoros.";
            break;
        case "elefante":
            textAnimal = "Nombre científico: Loxodonta africana. Un elefante adulto, que esté sano, no tiene predadores naturales, bueno uno sí, el ser humano. Es el mamífero más grande de la tierra puede pesar hasta ocho toneladas y mide 3 metros de alto por 7 de largo.";
            break;
        case "tigre":
            textAnimal = "Los tigres son los más emblemáticos de los grandes felinos. Su hermoso pelaje negro y anaranjado, además de sus largos bigotes blancos, son fuente de admiración e inspiración para muchos. ";
            break;
        case "mono":
            textAnimal = "Uno de los datos curiosos que más llaman la atención de los monos son los pulgares oponibles, que permiten el movimiento de los dedos en dirección contraria y hacen posible coger cosas con las manos. Los humanos solo los tenemos en las manos, pero los monos los tienen tanto en las manos como en los pies.";
            break;
        case "zebra":
            textAnimal = "Las cebras son animales sociales que viven en manadas. Pacen en grupo, normalmente hierba, e incluso se acicalan unas a otras. La especie más abundante es la cebra de llanura (o de Burchell). Viven en pequeños grupos familiares formados por un macho (semental), varias hembras y sus crías.";
            break;
    
        default:
            break;
    }

    Swal.fire({
        title: animal.charAt(0).toUpperCase() + animal.slice(1),
        text: textAnimal,
        color: 'rgba(0, 0, 0, 0.962)',
        backdrop: 'rgba(0, 0, 0, 0.419)'
    })
}
    
    
    
