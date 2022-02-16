const galeria = [
    {
        id: "wal1",
        nombre: "Alchemist",
        imagen: "images/imagen_01.png",
        movilidad: "305",
        tipo: "Fuerza",
        atributo: "25",
        ataque: "Cuerpo a Cuerpo" 
    },
    {
        id: "wal2",
        nombre: "Naga",
        imagen: "images/imagen_02.png",
        movilidad: "320",
        tipo: "Agilidad",
        atributo: "21",
        ataque: "Cuerpo a Cuerpo" 
    },
    {
        id: "wal3",
        nombre: "Terrorblade",
        imagen: "images/imagen_03.png",
        movilidad: "315",
        tipo: "Agilidad",
        atributo: "30",
        ataque: "Distancia" 
    },
    {
        id: "wal4",
        nombre: "Luna",
        imagen: "images/imagen_04.png",
        movilidad: "325",
        tipo: "Agilidad",
        atributo: "24",
        ataque: "Distancia" 
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

let tipoNaga = galeria[1]["tipo"]
let atributoNaga = galeria[1]["atributo"]
let ataqueNaga = galeria[1]["ataque"]
let velocidadNaga = galeria[1]["movilidad"]

let tipoAlche = galeria[0]["tipo"]
let atributoAlche = galeria[0]["atributo"]
let ataqueAlche = galeria[0]["ataque"]
let velocidadAlche = galeria[0]["movilidad"]

let tipoTerro = galeria[2]["tipo"]
let atributoTerro = galeria[2]["atributo"]
let ataqueTerro = galeria[2]["ataque"]
let velocidadTerro = galeria[2]["movilidad"]

let tipoLuna = galeria[3]["tipo"]
let atributoLuna = galeria[3]["atributo"]
let ataqueLuna = galeria[3]["ataque"]
let velocidadLuna = galeria[3]["movilidad"]

wal0.onclick = function(){
    header.style.backgroundImage = `url(${imagen_00})`;
    hero.innerHTML = `${nombre_00}`;
    atributo_num.innerHTML = `${atributoAlche}`
    atributo_.innerHTML = `${tipoAlche}`
    tipo_ataque.innerHTML = `${ataqueAlche}`
    velocidad_num.innerHTML = `${velocidadAlche}`
}
wal1.onclick = function(){
    header.style.backgroundImage = `url(${imagen_01})`;
    hero.innerHTML = `${nombre_01}`;
    atributo_num.innerHTML = `${atributoNaga}`
    atributo_.innerHTML = `${tipoNaga}`
    tipo_ataque.innerHTML = `${ataqueNaga}`
    velocidad_num.innerHTML = `${velocidadNaga}`
}
wal2.onclick = function(){
    header.style.backgroundImage = `url(${imagen_02})`;
    hero.innerHTML = `${nombre_02}`;
    atributo_num.innerHTML = `${atributoTerro}`
    atributo_.innerHTML = `${tipoTerro}`
    tipo_ataque.innerHTML = `${ataqueTerro}`
    velocidad_num.innerHTML = `${velocidadTerro}`
}
wal3.onclick = function(){
    header.style.backgroundImage = `url(${imagen_03})`;
    hero.innerHTML = `${nombre_03}`;
    atributo_num.innerHTML = `${atributoLuna}`
    atributo_.innerHTML = `${tipoLuna}`
    tipo_ataque.innerHTML = `${ataqueLuna}`
    velocidad_num.innerHTML = `${velocidadLuna}`
}