let app = document.getElementById('titulo');

let typewriter = new Typewriter(titulo, {
    loop: true
});

typewriter.typeString('Marina González')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Desarrollo web!')
    .pauseFor(2500)
    .deleteChars(4)
    .typeString('<strong>web!</strong>')
    .pauseFor(2500)
    .start();