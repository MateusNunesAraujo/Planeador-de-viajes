let distancia = document.querySelector('#distancia');
let eficiencia_combustible = document.querySelector('#eficiencia-combustible');
let galon = document.querySelector('#galon');
let cont_peaje = document.querySelector('.cont-peaje')
let agregar_peaje_btn = document.querySelector('#agregar-peaje')
let eliminar_peaje_btn = document.querySelector('#eliminar-peaje')
let calcular_btn = document.querySelector('#calcular')
let costo_viaje_cont = document.querySelector('#costo-viaje')
let inicio_btn = document.querySelector('.inicio')
let cartel_bienvenida = document.querySelector('.cartel-bienvenida')
let main = document.querySelector('main')
let horas_viajando_cont = document.querySelector('#horas-viajando')

eventos()
/* Función con todos los eventos */
function eventos() {
    agregar_peaje_btn.addEventListener('click',agregar_peaje) 
    eliminar_peaje_btn.addEventListener('click',eliminar_peaje)  
    calcular_btn.addEventListener('click',calcular_costo)
    inicio_btn.addEventListener('click',mostrar)
        
    
}
function mostrar() {
    cartel_bienvenida.classList.add('cartel-bienvenida-oculto')
    main.classList.add('mostrar-main')

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

/* Calcular costo del viaje (sumando todos los peajes y todos los demás inputs ) */
function calcular_costo() {
    let peajes = document.querySelectorAll('.peaje');
    let costo_viaje = (1/eficiencia_combustible.value)*distancia.value*galon.value
    let costo_peaje = 0
    peajes.forEach(element => costo_peaje += parseInt(element.value))
    let total = costo_viaje + costo_peaje
    total = Math.round(total)
    costo_viaje_cont.textContent = total + 'COP'
    calcular_horas()
}
/* Calcular horas */
function calcular_horas() {  
  let hora = distancia.value/60
  hora = Math.round(hora)
  horas_viajando_cont.textContent = hora

}
