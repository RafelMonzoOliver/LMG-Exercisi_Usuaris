import { Usuari } from "./Usuari";
import { llistaUsuaris } from "./GestioUsuaris";
import { GestioUsuaris } from "./GestioUsuaris";

const Juan = new Usuari("Juan","Juan@Gmail.com");
const Veronica = new Usuari("Veronica","Veronica@Gmail.com");
const Enrique = new Usuari("Enrique","Enrique@Gmail.com");

llistaUsuaris.push(Juan);
llistaUsuaris.push(Veronica);
llistaUsuaris.push(Enrique);
console.log(llistaUsuaris.length);