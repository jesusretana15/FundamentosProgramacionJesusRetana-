document.getElementById("btnIniciarSesion").addEventListener("click",validateform);

document.getElementById("txt-usuario").addEventListener("keypress",  function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      validateform();
    }
  });
document.getElementById("txt-password").addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      validateform();
    }
  });



  function  validateform() {
    let usuario = document.getElementById("txt-usuario").value;
    let contrasena = document.getElementById("txt-password").value;
    let tipoUsuario = document.getElementById("select").value;

    let usuarioP = "cenfo";
    let contrasenaP = "123";

    if (usuario == usuarioP && contrasena == contrasenaP) {
        Swal.fire({
            title: "Datos Correctos",
            text: "Has iniciado sesion como: " + tipoUsuario +". Click OK para continuar" ,
            type: "success"
        }).then(function() {
            window.location = "https://www.ucenfotec.ac.cr";
        });
    }
``
  }