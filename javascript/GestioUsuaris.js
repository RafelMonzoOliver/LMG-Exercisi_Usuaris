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
    }
    mostrarLlista(){
        console.log(llistaUsuaris);
    }
}