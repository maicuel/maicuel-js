console.log('estamos conectados :)')

let nombre = prompt('Ingresa tu nombre')

if ( nombre.length === 0 ){

    alert('Completa este campo!')
    console.error('campo vacio')

} else if( !isNaN(nombre) ) {
    alert('Completa este campo correctamente!')
    console.error('El nombre no debe ser solo numeros')
} else {
    let edad = prompt('ingresa tu edad')

    edad = parseInt(edad)
    
    if ( edad <= 10 ) {
        alert('Hola ' + nombre + ' debes tener mas de 10 años para ingresar')
    } else if ( edad <= 17 ) {
        alert( nombre + ' se que tienes ' + edad + ' años, pero te falta edad para ver todo el contenido. Por ahora solo puedes ver el contenido infantil')
    } else if ( edad >= 18 && edad <= 109 ) {
        alert('Muy bien ' + nombre + ' con ' + edad + ' años tienes acceso a todo nuestro contenido')
    } else if( edad > 110) {
        alert('De verdad tienes ' + edad + ' años! Revisa bien la edad que ingresaste!')
    }
}