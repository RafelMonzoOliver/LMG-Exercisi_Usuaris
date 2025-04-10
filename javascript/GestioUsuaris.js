import { Usuari } from "./Usuari.js";
export const llistaUsuaris = []; 

export class GestioUsuaris {
    afegirUsuari(Usuari) {
        const existeix = llistaUsuaris.some(u => u.dni === Usuari.dni); 
        if (existeix) {
            console.log("Error: l'usuari ja existeix o el DNI esta malament");
        } else {
            llistaUsuaris.push(Usuari);
            this.guardarLocalStorage();
            console.log('Usuari afegit:', Usuari);
            this.mostrarLlista();
        }
    }

    eliminarUsuari(index) {
        if (index > -1) {
            llistaUsuaris.splice(index, 1);
            this.guardarLocalStorage();
            console.log("Usuari eliminat en la posició:", index);
        }
        this.mostrarLlista();
    }

    mostrarLlista(usuaris = llistaUsuaris) {
        const resultat = document.getElementById("resultat");
        resultat.innerHTML = "";
    
        //EL que pasa cuant la llista esta
        if (usuaris.length === 0) {
            resultat.innerHTML = `<div>
                    <img src ="/sources/img/ralsei.png">
                </div>`;
            return;
        }

      
        usuaris.forEach((Usuari) => {
            const index = llistaUsuaris.indexOf(Usuari);

            const usuariDiv = document.createElement("div");
            usuariDiv.classList.add("usuariDiv");

            //la creacio del div dels usuaris
            usuariDiv.innerHTML = `
                <div>
                    <p><strong>${Usuari.nom}</strong></p>
                    <p><strong>${Usuari.dni}</strong></p>
                    <button data-id="${index}" class="Eliminar">Borrar</button>
                    <button data-id="${index}" class="Editar">Editar</button>
                </div>
            `;
            resultat.appendChild(usuariDiv);
        });
    }

    editarUsuari(index, nouNom, nouMail) {
        if (index >= 0 && index < llistaUsuaris.length) {
            const DNIusado = llistaUsuaris.some((usuari,i) => i !== index && usuari.dni === nouMail);
    
            //se asegura de que al editar un usuari no li posis el dni d'un altre usuari
            if(DNIusado){
                console.log("Error: El correu electrònic ja està en ús");
                return;
            }
    
            llistaUsuaris[index].nom = nouNom;
            llistaUsuaris[index].dni = nouMail;
            
            //localstorage
            this.guardarLocalStorage(); 
            console.log("Usuari editat:", llistaUsuaris[index]);
            this.mostrarLlista();
        } else {
            console.log("Error: Índex invàlid per a l'edició:", index);
        }
    }
    

    guardarLocalStorage(){
        localStorage.setItem("usuaris",JSON.stringify(llistaUsuaris));
    }
}
