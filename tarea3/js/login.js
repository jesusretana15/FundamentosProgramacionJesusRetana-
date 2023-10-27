document.getElementById("btn-login").addEventListener("click", validateform);
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

function validateform() {

    let inputUsuario = document.getElementById("txt-usuario").value;
    let inputpassword = document.getElementById("txt-password").value;
    let boxUsuario = document.getElementById("txt-usuario");
    let boxPassword = document.getElementById("txt-password");
    let password= "123";
    let usuario = "cenfo";
    boxPassword.classList.remove("error");
    boxUsuario.classList.remove("error");
    
    if (inputUsuario == "" || inputpassword == "") {
        if (inputUsuario == "" && inputpassword != "") {
            boxPassword.classList.remove("error");
            boxUsuario.classList.add("error");
        } else if (inputpassword == ""&& inputUsuario != "") {
            boxUsuario.classList.remove("error");
            boxPassword.classList.add("error");
        } else if (inputUsuario == "" && inputpassword == "") {
            boxPassword.classList.add("error");
            boxUsuario.classList.add("error");
        }
        Swal.fire({
            // title:'<p class="display-6 text-white">Error</p>',
            background:'#595959',
            confirmButtonColor: 'transparent',
            confirmButtonBorderColor:'#000000',
            html: '<iframe src="https://lottie.host/?file=fbe1d6d4-8eeb-40f8-877a-f170d0dcb24c/g5ZJHDmw3P.json"></iframe> <br>'+ '<p class="text-white pt-4" style="font-size:30px">Los campos no pueden estar vacíos</p>'
          })

    } else if (inputUsuario == usuario && inputpassword != password) {
        boxPassword.classList.add("error");
        Swal.fire({
            // title:'<p class="display-6 text-white">Error</p>',
            background:'#595959',
            confirmButtonColor: 'transparent',
            confirmButtonBorderColor:'#000000',
            html: '<iframe src="https://lottie.host/?file=fbe1d6d4-8eeb-40f8-877a-f170d0dcb24c/g5ZJHDmw3P.json"></iframe> <br>'+ '<p class="text-white pt-4" style="font-size:30px">Contraseña incorrecta</p>'
          })
    } else if (inputUsuario != usuario && inputpassword == password) {
        boxUsuario.classList.add("error");
        Swal.fire({
            // title:'<p class="display-6 text-white">Error</p>',
            background:'#595959',
            confirmButtonColor: 'transparent',
            confirmButtonBorderColor:'#000000',
            html: '<iframe src="https://lottie.host/?file=fbe1d6d4-8eeb-40f8-877a-f170d0dcb24c/g5ZJHDmw3P.json"></iframe> <br>'+ '<p class="text-white pt-4" style="font-size:30px">Usuario incorrecto</p>'
          })
    } else if (inputUsuario != usuario && inputpassword != password) {
        boxUsuario.classList.add("error");
        boxPassword.classList.add("error");
        Swal.fire({
            // title:'<p class="display-6 text-white">Error</p>',
            background:'#595959',
            confirmButtonColor: 'transparent',
            confirmButtonBorderColor:'#000000',
            html: '<iframe src="https://lottie.host/?file=fbe1d6d4-8eeb-40f8-877a-f170d0dcb24c/g5ZJHDmw3P.json"></iframe> <br>'+ '<p class="text-white pt-4" style="font-size:30px">Contraseña y usuario incorrectos</p>'
          })
    } else if (inputUsuario == usuario && inputpassword == password) {
        Swal.fire({
            title:'<p class="display-6 text-white">Datos Correctos</p>',
            background:'#595959',
            showConfirmButton: false,
            timer: 3000,
            
            html: '<iframe src="https://lottie.host/?file=fe10b6d0-5c16-43f5-95c5-644e77d04f8a/r496Cu3QlD.json"></iframe> <br>'+ '<p class="text-white pt-4" style="font-size:30px">Cargando...</p>'
          }).then(() => {
            
        });
    }

}

