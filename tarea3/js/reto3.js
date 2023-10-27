function cambio(value) {
    if (value =="Default") {
        document.getElementById("defaulttext").hidden = false;
        document.getElementById("tabladedatos").hidden = true;
        
    } else {
        document.getElementById("defaulttext").hidden = true;
        document.getElementById("tabladedatos").hidden = false;
    }

    let horario = document.getElementById("horario");
    let ubicacion = document.getElementById("ubicacion");

    let txtHorario= [" Coronado <br> De Lunes a Viernes <br>8am a 5pm <br> Sabados  8am a 4pm <br>jornada continua"," Guadalupe <br> De Lunes a Viernes <br>8am a 5pm <br> Sabados  8am a 4pm <br>jornada continua"," San Jose <br> De Lunes a Viernes <br>8am a 5pm <br> Sabados  8am a 4pm <br>jornada continua"]
    horario.innerHTML = txtHorario[value];

    let txtUbicacion = ["Coronado Centro Centro Comercial, Plaza Madero<br>", "150 metros sur de Correos de Costa Rica, frente a la Cruz Roja<br>","50mts Norte Barrio Chino <br>"]
    ubicacion.innerHTML = txtUbicacion[value];

}

