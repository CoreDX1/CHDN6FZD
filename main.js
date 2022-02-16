const galeria = [
    {
        id: "wal1",
        class: "walC0",
        nombre: "Alchemist",
        imagen: "images/imagen_01.png",
        movilidad: "305",
        tipo: "Fuerza",
        atributo: "25",
        ataque: "Cuerpo a Cuerpo" 
    },
    {
        id: "wal2",
        class: "walC1",
        nombre: "Naga",
        imagen: "images/imagen_02.png",
        movilidad: "320",
        tipo: "Agilidad",
        atributo: "21",
        ataque: "Cuerpo a Cuerpo" 
    },
    {
        id: "wal3",
        class: "walC2",
        nombre: "Terrorblade",
        imagen: "images/imagen_03.png",
        movilidad: "315",
        tipo: "Agilidad",
        atributo: "30",
        ataque: "Distancia" 
    },
    {
        id: "wal4",
        class: "walC3",
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
    <a href="#" class="${menuBar.class}" id="${menuBar.id}">${menuBar.nombre}</a>`
    menu.appendChild(contenedorMenu)
}


header.addEventListener("click", (e) => {
    if(e.target.classList.contains("walC0")){ 
        header.style.backgroundImage = `url(${galeria[0]["imagen"]})`;
        hero.innerHTML = `${galeria[0]["nombre"]}`;
        atributo_num.innerHTML = `${galeria[0]["atributo"]}`
        atributo_.innerHTML = `${galeria[0]["tipo"]}`
        tipo_ataque.innerHTML = `${galeria[0]["ataque"]}`
        velocidad_num.innerHTML = `${galeria[0]["movilidad"]}`
    }else if (e.target.classList.contains("walC1")){
        header.style.backgroundImage = `url(${galeria[1]["imagen"]})`;
        hero.innerHTML = `${galeria[1]["nombre"]}`;
        atributo_num.innerHTML = `${galeria[1]["atributo"]}`
        atributo_.innerHTML = `${galeria[1]["tipo"]}`
        tipo_ataque.innerHTML = `${galeria[1]["ataque"]}`
        velocidad_num.innerHTML = `${galeria[1]["movilidad"]}`
    }else if (e.target.classList.contains("walC2")){
        header.style.backgroundImage = `url(${galeria[2]["imagen"]})`;
        hero.innerHTML = `${galeria[2]["nombre"]}`;
        atributo_num.innerHTML = `${galeria[2]["atributo"]}`
        atributo_.innerHTML = `${galeria[2]["tipo"]}`
        tipo_ataque.innerHTML = `${galeria[2]["ataque"]}`
        velocidad_num.innerHTML = `${galeria[2]["movilidad"]}`
    }else if (e.target.classList.contains("walC3")){
        header.style.backgroundImage = `url(${galeria[3]["imagen"]})`;
        hero.innerHTML = `${galeria[3]["nombre"]}`;
        atributo_num.innerHTML = `${galeria[3]["atributo"]}`
        atributo_.innerHTML = `${galeria[3]["tipo"]}`
        tipo_ataque.innerHTML = `${galeria[3]["ataque"]}`
        velocidad_num.innerHTML = `${galeria[3]["movilidad"]}`
    }
})