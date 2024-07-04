let num1, num2, respuesta, puntaje;
txt_suma = document.getElementById("suma");
op1 = document.getElementById("op1");
op2 = document.getElementById("op2");
op3 = document.getElementById("op3");
txt_msj = document.getElementById("msj");
txt_resultado = document.getElementById("resultado");
txt_puntaje = document.querySelector(".correcta");
txt_puntajeF= document.querySelector(".incorrecta")
function comenzar() {
  txt_resultado.innerHTML = "?";
  txt_msj.innerHTML = "";

  // genera la suma - Numeros aleatorios entre 0 y 9
  num1 = Math.round(Math.random() * 20);
  num2 = Math.round(Math.random() * 20);
  respuesta = num1 + num2;

  // asignamos los números para que se muestren
  txt_suma.innerHTML = num1 + " + " + num2 + " = ";

  // genero un número entre 0 y 2 para colocar la opción correcta
  indiceOpCorrecta = Math.round(Math.random() * 2);

  // si indiceCorrecta es igual a 0
  if (indiceOpCorrecta == 0) {
    op1.innerHTML = respuesta;
    op2.innerHTML = respuesta + 1;
    op3.innerHTML = respuesta - 1;
  }
  if (indiceOpCorrecta == 1) {
    op1.innerHTML = respuesta - 1;
    op2.innerHTML = respuesta;
    op3.innerHTML = respuesta - 2;
  }
  if (indiceOpCorrecta == 2) {
    op1.innerHTML = respuesta + 2;
    op2.innerHTML = respuesta + 3;
    op3.innerHTML = respuesta;
  }
}

function controlarRespuesta(opcionElegida) {
  txt_resultado.innerHTML = opcionElegida.innerHTML;
  let opcionElegidaNumero = parseInt(opcionElegida.innerHTML, 10);
  if (respuesta === opcionElegidaNumero) {
   
    puntaje++;
    
    txt_puntaje.innerHTML = "Aciertos: " + puntaje;

    Swal.fire({
      title: '¡EXCELENTE!',
      text: 'Respuesta correcta. ¡Bien hecho!',
      icon: 'success',
      confirmButtonText: 'Continuar',
      customClass: {
        popup: 'text-light bg-dark',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        comenzar(); 
      }
    });
  } else {
    incorrecta++
    txt_puntajeF.innerHTML="Incorrecta:"+ incorrecta;

    Swal.fire({
      title: 'INTENTA DE NUEVO',
      text: 'Respuesta incorrecta. ¡Vuelve a intentarlo!',
      icon: 'error',
      confirmButtonText: 'OK',
      customClass: {
        popup: 'text-light bg-dark', // Agrega tu clase CSS personalizada aquí
      }
    });
    setTimeout(limpiar, 2000);
  }
}

function limpiar() {
  txt_resultado.innerHTML = "?";
  txt_msj.innerHTML = "";
}

// Inicializar el puntaje
puntaje = 0;
incorrecta=0
// Mostrar el puntaje inicial
txt_puntaje.innerHTML = "Puntaje: " + puntaje;
txt_puntajeF.innerHTML="Incorrecta:"+ incorrecta;

comenzar();
