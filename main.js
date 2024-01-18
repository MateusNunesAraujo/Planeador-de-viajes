let distancia = document.querySelector('#distancia');
let eficiencia_combustible = document.querySelector('#eficiencia-combustible');
let galon = document.querySelector('#galon');
let cont_peaje = document.querySelector('.cont-peaje')
let peajes = document.querySelectorAll('.peaje');
let agregar_peaje_btn = document.querySelector('#agregar-peaje')
let eliminar_peaje_btn = document.querySelector('#eliminar-peaje')


eventos()
/* Función con todos los eventos */
function eventos() {
    agregar_peaje_btn.addEventListener('click',agregar_peaje) 
    eliminar_peaje_btn.addEventListener('click',eliminar_peaje)  
}

/* Agregar peaje */
function agregar_peaje() {
    let input_peaje = document.createElement('input')
    input_peaje.type = 'number'
    input_peaje.classList.add('peaje')
    cont_peaje.children[0].appendChild(input_peaje)
}

/* Eliminar peaje */
function eliminar_peaje() {
    let eliminar_peaje = document.querySelectorAll('.peaje')
    if(eliminar_peaje.length === 1){
    return
    }
    eliminar_peaje[eliminar_peaje.length-1].remove()
}