const promedio = (a, b, c, d, e) => (a + b + c + d + e) / 5;

let alumno1 = promedio(
  parseInt(prompt("ingresa tu calificacion de Matematicas")),
  parseInt(prompt("ingresa tu calificacion de Lengua y Literatura")),
  parseInt(prompt("ingresa tu calificacion de Fisica")),
  parseInt(prompt("ingresa tu calificacion de Ingles")),
  parseInt(prompt("ingresa tu calificacion de Ciudadania"))
);

if (alumno1 >= 6) {
  for (let i = 0; i < alumno1; i++) {
    console.log(i);
  }

  console.log(`${alumno1}, felicidades!. aprobaste.`);
} else {
  console.log(`alumno 1: no aprobaste, tu calificacion final es: ${alumno1}`);
}
