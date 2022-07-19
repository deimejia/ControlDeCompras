let numIni = parseInt(
  prompt(
    "Hola! por el mejor adivinador de la historia! Piensa e ingresa un número del 1 al 10"
  )
);

function paso1() {
  alert("A ese número sumale 5 y restale 2. ¿Listo? Presiona el botón");
  const resultadoUno = numIni + 3;
  alert("Tú numero a cambiado, pero es muy difícil adivinarlo aún");

  alert("Ahora súmale 4 y réstale 7 (si te hace falta calculadora ya sabes)");
  const resultadoDos = resultadoUno - 3;
  alert("Ya lo tengo...");

  alert("Multiplica ese resultado por 9 ¿Ya?...");
  const resultadoTres = resultadoDos * 9;
  alert("Me encanta, el número debería salir en la próxima lotería");

  alert("Eso estuvo fácil, ahora suma los dos digitlos de ese número");
  const resultadoCuatro = 9;
  alert("Claro que lo sé, tu número ahora es 6, ¿no? espera, me he equivocado");

  alert("A tu nuevo número ahora tienes que restarle 5");
  const resultadoCinco = resultadoCuatro - 5;
  prompt(
    "El nuevo número corresponderá a una letra A:1  B:2.   C:3.   D:4.   E:5.   F:6.   G:7.  H:8.   I:9.   J:10. ENGÁÑAME, PRUEBAME INDICANDO UNA INCORRECTA!"
  );
  let edad = prompt("Ahora ingresa tu edad");
  alert(
    "Recuerdas la letra?, piensa en un país, ahora la segunda letra de esa país representa un animal, ya lo pensaste?, ahora la tercera letra del nombre del animal representa a una fruta, la tienes?"
  );
  alert(
    "Qué haces con " +
      edad +
      " años de edad en Dinamarca, viendo iguanas y comiendo uvas?"
  );
}

paso1();
