import { Usuari } from "./Usuari.js";
export const llistaUsuaris = [];

export class GestioUsuaris {
    afegirUsuari(Usuari) {
        llistaUsuaris.push(Usuari);
        console.log('Usuari afegit:', Usuari);
        this.mostrarLlista();
    }

    eliminarUsuari(index) {
        if (index > -1) {
            llistaUsuaris.splice(index, 1);
            console.log("Usuari eliminat en la posició:", index);
        }
        this.mostrarLlista();
    }

    mostrarLlista(usuaris = llistaUsuaris) {
        const resultat = document.getElementById("resultat");
        resultat.innerHTML = "";
    
        if (usuaris.length === 0) {
            resultat.innerHTML = `<div>
                    <img src ="/sources/img/ralsei.png">
                </div>`;
            return;
        }

      
        usuaris.slice(0, 10).forEach((Usuari) => {
            const index = llistaUsuaris.indexOf(Usuari);
    
            const usuariDiv = document.createElement("div");
            usuariDiv.classList.add("usuariDiv");
        
            usuariDiv.innerHTML = `
                <div>
                    <p><strong>${Usuari.nom}</strong></p>
                    <p><strong>${Usuari.mail}</strong></p>
                    <button data-id="${index}" class="Eliminar">Borrar</button>
                    <button data-id="${index}" class="Editar">Editar</button>
                </div>
            `;
            resultat.appendChild(usuariDiv);
        });
    }

}
