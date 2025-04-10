import { GestioUsuaris } from "./GestioUsuaris.js";
import { Usuari } from "./Usuari.js";
import { llistaUsuaris } from "./GestioUsuaris.js";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formulari");
    const button = document.getElementById("Llista");
    const div = document.getElementById("divllista");
    const nomInput = document.getElementById("nom");
    const mailInput = document.getElementById("mail");
    const submitButton = document.getElementById("Afegir");
    const buscarInput = document.getElementById("buscar");
    const botonBusqueda = document.getElementById("botonBusqueda");
    const gestio = new GestioUsuaris();
    let indexEdicio = -1; 

    //Boto de mostrar llista
    button.addEventListener("click",function(){
        gestio.mostrarLlista();
        div.style.display = 'block';
    });

    //formulari afegir usuari
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const nom = nomInput.value;
        const dni = mailInput.value;

        if (indexEdicio === -1) {
            let usuari = new Usuari(nom, dni);
            gestio.afegirUsuari(usuari);
        } else {
            gestio.editarUsuari(indexEdicio, nom, dni);
            indexEdicio = -1; 
            submitButton.textContent = "Añadir"; 
        }

        form.reset();
        div.style.display = 'block';
    });
    
    //els botons de borrar i editar
    document.addEventListener("click", function (event) {
        const target = event.target;
        const index = parseInt(target.getAttribute("data-id"));

        if (target.classList.contains("Eliminar")) {
            gestio.eliminarUsuari(index);
        }

        if (target.classList.contains("Editar")) {
            cargarUsuarioParaEditar(index);
        }
    });

    //edicio usuaris
    function cargarUsuarioParaEditar(index) {
        if (index >= 0 && index < llistaUsuaris.length) {
            nomInput.value = llistaUsuaris[index].nom;
            mailInput.value = llistaUsuaris[index].mail;
            indexEdicio = index; 
            submitButton.textContent = "Guardar"; 
        } else {
            alert("Índice no válido.");
        }
    }

    //boton de cercar
    botonBusqueda.addEventListener("click", function (event) {
        event.preventDefault();
    
        const textoBusqueda = buscarInput.value.toLowerCase().trim();
    
        //Si la barra esta en blanc simplement te mostrara tots els usuaris
        if (textoBusqueda === "") {
            gestio.mostrarLlista();
            return;
        }
    
        //ELs resultats del nom cercat
        const resultatsFiltrats = llistaUsuaris.filter(u =>
            u.nom.toLowerCase().startsWith(textoBusqueda)
        );
    
        gestio.mostrarLlista(resultatsFiltrats);
    });

    //LocalStroage
    const usuarisGuardats = localStorage.getItem("usuaris");

    if (usuarisGuardats) {
        JSON.parse(usuarisGuardats).forEach(u => {
            const usuari = new Usuari(u.nom, u.dni);
            llistaUsuaris.push(usuari);
        });
        console.log("Usuaris carregats des de localStorage:", llistaUsuaris);
    } else {
        fetch('/json/Users.json')
            .then(response => response.json())
            .then(data => {
                //Numero de usuaris que retorna
                const retornar = data.slice(0,10);
                retornar.forEach(u => {
                    const usuari = new Usuari(u.nom,u.dni);
                    llistaUsuaris.push(usuari);
                });
                localStorage.setItem("usuaris", JSON.stringify(llistaUsuaris));
                console.log("Usuaris carregats des del JSON i guardats en localStorage:", llistaUsuaris);
            })
            .catch(error => {
                console.error("Error carregant usuaris JSON:", error);
            });
    }
});
