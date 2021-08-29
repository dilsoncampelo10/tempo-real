/**
 * @author Dilson Campêlo
 * 29/08/2021
 */
let timer

function iniciar(){
    timer = setInterval(mostraHora,1000)
}
    
function parar(){
    clearInterval(timer)
}

function mostraHora(){
    let d = new Date()
    let hora = d.getHours()
    let min = d.getMinutes()
    let seg = d.getSeconds()
    let div = document.querySelector("#hora")
    div.innerHTML = `${hora}:${min}:${seg}`
    
}
