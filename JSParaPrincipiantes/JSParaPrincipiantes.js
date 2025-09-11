//Con las mismas comparaciones ejemplificamos un caso de inicio de sesión

let passwordBD = 'pepe123'
let input = 'dsgsfgsfg'

let result = input == passwordBD;

if (result === true) {
    console.log('Login correcto');

}

if (result === false) {
        console.log('Login incorrecto');
}

console.log(result);

