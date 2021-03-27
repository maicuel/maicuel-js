console.log('estamos conectados :)')



let nombre = prompt('Ingresa tu nombre')
console.log(nombre)


if (nombre.length > 0 && isNaN(nombre) ){

    let edad = parseInt(prompt('Ingresa tu edad'))
    console.log(edad)

    let faltante =  18 - edad

    if (!isNaN(edad)) {
        console.log( "es un numero ")

        if ( edad >= 18 ) {
        
            alert('Bienvenido ' + nombre )
            console.log('cumple requisitos')

        } else {

            alert('Lo siento ' + nombre + ' no tienes edad suficiente para ver este contenido te faltan: ' + faltante + ' años' )
            console.error('No cumple requisitos')
        }


    } else {
        console.log( "no es un numero ")
        alert('Debes ingresar un numero')
    }

    
} else {
    alert('Debes completar este campo correctamente!')}

