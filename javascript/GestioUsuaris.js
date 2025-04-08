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

    mostrarLlista() {
        const resultat = document.getElementById("resultat");
        resultat.innerHTML = "";

        if (llistaUsuaris.length === 0) {
            resultat.innerHTML = `<div>No hay usuarios</div>`;
            return;
        }

        llistaUsuaris.forEach((Usuari, index) => {
            if(index >=10) return;
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

        console.log("Lista de usuarios actualizada");
    }

}
