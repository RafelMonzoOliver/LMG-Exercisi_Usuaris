import { Usuari } from "./Usuari.js";
export const llistaUsuaris = [];

export class GestioUsuaris{
    afegirUsuari(Usuari){
        llistaUsuaris.push(Usuari);
        console.log('Usuari afegit,',Usuari);
        this.mostrarLlista();
    }
    eliminarUsuari(Usuari){
        llistaUsuaris.splice(Usuari);
        this.mostrarLlista();
    }
    mostrarLlista(){
        const resultat = document.getElementById("resultat");
        resultat.innerHTML = "";
    
        if(llistaUsuaris.length === 0){
            resultat.innerHTML =`
            <div>
                error
            </div>
            `
            ;
            return;
        }
    
        llistaUsuaris.forEach((Usuari,index)=>{
            const usuariDiv = document.createElement("div");
            usuariDiv.classList.add("usuariDiv");
    
            usuariDiv.innerHTML = `
            <div>
                <div>
                    <p><strong>${Usuari.nom}</strong></p>
                    <p><strong>${Usuari.mail}</strong></p>
                </div>
                <div>
                    &emsp;<button onclick="eliminarUsuari(${index})">Borrar</button>
                    &emsp;<button>Editar</button>
                </div>
            </div>
            `;
            resultat.appendChild(usuariDiv);
    
        });    
    }
    
    editarUsuari(Usuari){

    }
}