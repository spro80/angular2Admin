// Importar el núcleo de Angular
import {Component} from 'angular2/core'

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: "menu",
    templateUrl: "app/view/menu.html"
})

// Clase del componente donde iran los datos y funcionalidades
export class MenuComponent{

    public mensajeMenu:string = "Menu del Sistema.";
    
}
