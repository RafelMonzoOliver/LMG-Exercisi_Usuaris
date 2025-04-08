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
        const mail = mailInput.value;

        if (indexEdicio === -1) {
            let usuari = new Usuari(nom, mail);
            gestio.afegirUsuari(usuari);
        } else {
            gestio.editarUsuari(indexEdicio, nom, mail);
            indexEdicio = -1; 
            submitButton.textContent = "Añadir"; 
        }

        form.reset();
        div.style.display = 'block';
    });

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
        const index = parseInt(buscarInput.value);

        if (!isNaN(index) && index >= 0 && index < llistaUsuaris.length) {
            cargarUsuarioParaEditar(index);
        } else {
            alert("Índice no encontrado.");
        }
    });

    button.addEventListener("click", function () {
        div.style.display = 'block';
    });

    //json
    fetch('/json/Users.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(u => {
                const usuari = new Usuari(u.nom, u.mail);
                llistaUsuaris.push(usuari);
            });
            console.log("Usuaris:",llistaUsuaris);
        })
        .catch(error =>{
            console.error("Error carragant usuaris JSON:", error);
        });
});
