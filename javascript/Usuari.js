export class Usuari{
    constructor(nom,mail){
        this.nom = nom;
        this.mail = mail;
    }
    mostrarDetalls(){
        return `${this.nom} ${this.mail},`;
    }
}
