console.log('estamos conectados :)')


let edad = parseInt(prompt('Ingresa tu edad'))
console.log(edad)

let faltante =  18 - edad

if ( edad == !isNaN ){
    alert('Debes ingresar un numero')
}

if ( edad >= 18 ) {
    
    let nombre = prompt('Ingresa tu nombre')
    alert('Bienvenido ' + nombre )
    console.log('cumple requisitos')

} else {

    alert('Lo siento no tienes edad suficiente para ver este contenido te faltan: ' + faltante + ' años' )
    console.error('No cumple requisitos')
}

