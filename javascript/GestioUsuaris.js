import { Usuari } from "./Usuari";

export const llistaUsuaris = [];

export class GestioUsuaris{
    afegirUsuari(){
  
        llistaUsuaris.push(Usuari);
    }
    eliminarUsuari(Usuari){
        llistaUsuaris.splice(Usuari);
    }
    mostrarLlista(){
        console.log(llistaUsuaris);
    }
}