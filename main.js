const galeria = [
    {
        id: "wal1",
        nombre: "Alchemist",
        imagen: "images/imagen_01.png",
    },
    {
        id: "wal2",
        nombre: "Naga",
        imagen: "images/imagen_02.png",
        movilidad: "320",
        atributo: "Agilidad",
        agilidad: "21",
        ataque: "Cuerpo a Cuerpo" 
    },
    {
        id: "wal3",
        nombre: "Terrorblade",
        imagen: "images/imagen_03.png",
    },
    {
        id: "wal4",
        nombre: "Luna",
        imagen: "images/imagen_04.png"
    }
    
];

const header = document.getElementById("header");
const menu = document.getElementById("menu");
for ( menuBar of galeria ){
    let contenedorMenu = document.createElement("li");
    contenedorMenu.innerHTML = `
    <a href="#" id="${menuBar.id}">${menuBar.nombre}</a>`
    menu.appendChild(contenedorMenu)
}

const wal0 = document.getElementById("wal1")
const wal1 = document.getElementById("wal2")
const wal2 = document.getElementById("wal3")
const wal3 = document.getElementById("wal4")
const hero = document.getElementById("hero")

const atributo_ = document.getElementById("atributo_")
const atributo_num = document.getElementById("atributo_num")
const velocidad_ = document.getElementById("velocidad_")
const velocidad_num = document.getElementById("velocidad_num")
const tipo_= document.getElementById("tipo_")
const tipo_ataque= document.getElementById("tipo_ataque")


let imagen_00 = galeria[0]["imagen"]
let imagen_01 = galeria[1]["imagen"]
let imagen_02 = galeria[2]["imagen"]
let imagen_03 = galeria[3]["imagen"]

let nombre_00 = galeria[0]["nombre"]
let nombre_01 = galeria[1]["nombre"]
let nombre_02 = galeria[2]["nombre"]
let nombre_03 = galeria[3]["nombre"]

let agilidadNaga = galeria[1]["agilidad"]
let atributoNaga = galeria[1]["atributo"]

wal0.onclick = function(){
    header.style.backgroundImage = `url(${imagen_00})`;
    hero.innerHTML = `${nombre_00}`;
}
wal1.onclick = function(){
    header.style.backgroundImage = `url(${imagen_01})`;
    hero.innerHTML = `${nombre_01}`;
    atributo_num.innerHTML = `${agilidadNaga}`
    atributo_.innerHTML = `${atributoNaga}`
}
wal2.onclick = function(){
    header.style.backgroundImage = `url(${imagen_02})`;
    hero.innerHTML = `${nombre_02}`;
}
wal3.onclick = function(){
    header.style.backgroundImage = `url(${imagen_03})`;
    hero.innerHTML = `${nombre_03}`;
}