console.log('estamos conectados :)')


let edad = prompt('Ingresa tu edad')
let faltante =  18 - edad

if ( edad >= 18 ) {
    
    let nombre = prompt('Ingresa tu nombre')
    alert('Bienvenido ' + nombre )
    console.log('cumple requisitos')

} else {

    alert('Lo siento no tienes edad suficiente para ver este contenido te faltan: ' + faltante + ' años' )
    console.error('No cumple requisitos')
}

