function writeName(){
    let name = prompt(`¿Cual es tu nombre?`);
    document.getElementById("user").innerHTML = `Hola ${name}`;
}