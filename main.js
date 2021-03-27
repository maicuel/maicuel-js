console.log('estamos conectados :)')


function ingresarEdad() {
    
   let edad = document.getElementById("inputEdad").value;
   console.log(edad)

   let faltante =  18 - edad

    if (!isNaN(edad)) {
        console.log( "es un numero ")

        if ( edad >= 18 ) {
            
            let nombre = prompt('Ingresa tu nombre')
            alert('Bienvenido ' + nombre )
            console.log('cumple requisitos')

        } else {

            alert('Lo siento no tienes edad suficiente para ver este contenido te faltan: ' + faltante + ' años' )
            console.error('No cumple requisitos')
        }


    } else {
        console.log( "no es un numero ")
        alert('Debes ingresar un numero')
    }

}

