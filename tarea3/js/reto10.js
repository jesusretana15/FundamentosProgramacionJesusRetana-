let inputID = document.getElementById("cedula");
let nameSpace = document.getElementById("name");
let photoSpace = document.getElementById("photo");

function buscar() {
        
    let txtID = document.getElementById("cedula").value;
    console.log(txtID)
    let maria = ['123','<img src="./imagenes/imagen1.jpeg" class="img-fluid pt-5" style="height: 400px;">' , '<h5>Maria Lopez</h5>']
    let jose = ['1234','<img src="./imagenes/imagen2.jpeg" class="img-fluid pt-5" style="height: 400px;">' , '<h5>Jose Ruiz</h5>']

    if (txtID == maria[0]) {
        nameSpace.innerHTML = maria[2];
        photoSpace.innerHTML = maria[1]
    } else if (txtID == jose[0]) {
        nameSpace.innerHTML = jose[2];
        photoSpace.innerHTML = jose[1]
    } else {
        Swal.fire({
            title:'Error',
            text: "El empleado con la cedula " + txtID + " no ha sido registrado",
            backdrop:'rgba(0, 0, 0, 0.45)',
        })
    }

}

function borrar() {
    inputID.value= "";
    nameSpace.innerHTML ="";
        photoSpace.innerHTML = "";
}

