import { GestioUsuaris } from "./GestioUsuaris.js";
import { Usuari } from "./Usuari.js";
import { llistaUsuaris } from "./GestioUsuaris.js";

document.addEventListener("DOMContentLoaded",function(){
    const form = document.getElementById("formulari");
    const button = document.getElementById("Llista");
    const div = document.getElementById("divllista");
    const resultat = document.getElementById("resultat");
    const gestio = new GestioUsuaris();


    form.addEventListener("submit",function (event){
        event.preventDefault();

        const nom = document.getElementById("nom").value;
        const mail = document.getElementById("mail").value;
        let usuari = new Usuari(nom,mail);
        gestio.afegirUsuari(usuari);
         

    })
});


const Juan = new Usuari("Juan","Juan@Gmail.com");
const Veronica = new Usuari("Veronica","Veronica@Gmail.com");
const Enrique = new Usuari("Enrique","Enrique@Gmail.com");

llistaUsuaris.push(Juan);
llistaUsuaris.push(Veronica);
llistaUsuaris.push(Enrique);
console.log(llistaUsuaris.length);
console.log(llistaUsuaris)