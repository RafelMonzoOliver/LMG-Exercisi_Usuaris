export class Usuari{
    constructor(nom,dni){
        this.nom = nom;
        this.dni = dni;
    }
    mostrarDetalls(){
        return `${this.nom} ${this.dni},`;
    }
}
